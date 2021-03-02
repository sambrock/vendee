const fs = require('fs');

const tf = require('@tensorflow/tfjs-node');
const cocoSsd = require('@tensorflow-models/coco-ssd');

const { capture, captureEvent } = require('./capture');
const { processPredictions } = require('./predictions');
const { cameras } = require('../config');

let model;

const readImage = path => {
  const imageBuffer = fs.readFileSync(path);
  return tf.node.decodeJpeg(imageBuffer);
}

const detect = async (image, camId) => {
  const predictions = await model.detect(image);
  processPredictions(predictions, camId);
}

const removeImage = path => {
  try {
    fs.unlinkSync(path)
  } catch (err) {
    console.error(err)
  }
}

const main = async () => {
  // Load model
  model = await cocoSsd.load();

  // Start capture
  cameras.forEach(c => capture(c));

  // Listen for capture event
  captureEvent.addListener('capture', async (path, camId) => {
    const image = readImage(path);

    detect(image, camId);

    removeImage(path);
  });
}

main();