const fs = require('fs');
const tf = require('@tensorflow/tfjs-node-gpu');

const { models, max_results, iou_threshold, min_score, dtype } = require("../config");

const loadSavedModel = async (modelId) => {
  const modelPath = models[modelId].model;

  // Build model map
  const def = (await tf.node.getMetaGraphsFromSavedModel(modelPath))[0];
  const signature = Object.keys(def.signatureDefs)[0];
  let outputs = def.signatureDefs[signature].outputs;

  map = {};
  for (let i in Object.keys(outputs)) map[Object.keys(outputs)[i]] = i;

  // Load model
  const model = await tf.node.loadSavedModel(modelPath);

  return model;
}

const getImageTensor = (path) => {
  const data = fs.readFileSync(path);

  // Decode jpeg
  const tfimage = tf.node.decodeImage(data);

  // Add dimension as detection requires 4d tensor
  const expanded = tf.expandDims(tfimage, 0);
  const casted = tf.cast(expanded, dtype);

  return casted;
}

const getPredictions = async (model, modelId, tensor) => {
  // Get predictions
  const predictions = await model.predict(tensor);

  const classes = await predictions[map['detection_classes']].data();
  const scores = await predictions[map['detection_scores']].data();
  const boxes = await predictions[map['detection_boxes']].array();

  // Sort + filter results
  const overlapT = await tf.image.nonMaxSuppressionAsync(boxes[0], scores, max_results, iou_threshold, min_score)
  const overlap = await overlapT.data();

  tf.dispose(overlapT);

  const labels = require(models[modelId].classes);
  const results = [];

  for (const i in overlap) {
    results.push({
      score: Math.trunc(10000 * scores[i]) / 10000,
      classId: classes[i],
      class: labels[classes[i]].displayName,
      bbox: boxes[0][i].map((a) => Math.trunc(10000 * a) / 10000),
    })
  }

  // Free up memory
  // tf.dispose(tensor);
  // tf.dispose(predictions);
  // model.dispose();

  return results;
};

module.exports = { loadSavedModel, getImageTensor, getPredictions };