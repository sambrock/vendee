const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');
const cocoSsd = require('@tensorflow-models/coco-ssd');

const { capture, captureEvent } = require('./capture');

let model;

const readImage = path => {
  const imageBuffer = fs.readFileSync(path);
  return tf.node.decodeJpeg(imageBuffer);
}

const detect = async image => {
  const predictions = await model.detect(image);
  return predictions;
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
  capture();

  // Listen for capture event
  captureEvent.addListener('capture', async path => {
    const image = readImage(path);

    const predictions = await detect(image);
    console.log(path, predictions);

    removeImage(path);
  });
}

main();