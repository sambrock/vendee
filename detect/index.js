const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');
const cocoSsd = require('@tensorflow-models/coco-ssd');

const capture = require('./capture');
const config = require('../config');

const getCaptures = async () => {
  try {
    const captures = await fs.promises.readdir('./captures');
    return captures;
  } catch (err) {
    console.error(err);
  }
}

const readImage = path => {
  const imageBuffer = fs.readFileSync(path);

  return tf.node.decodeJpeg(imageBuffer);
}

const detect = async (model, path) => {
  try {
    const image = readImage(path);
    const predictions = await model.detect(image);
    console.log(predictions);
  } catch (err) {
    console.log(err);
    return;
  }
}

const main = async () => {
  // Load model
  const model = await cocoSsd.load();

  // Start capture
  capture();

  setInterval(async () => {
    // Get captures
    const captures = await getCaptures();
    if (!captures) return;

    captures.forEach(file => {
      const path = `./captures/${file}`;

      // Detect
      try {
        detect(model, path);
      } catch (err) {
        console.log(err);
        return;
      }

      // Remove file
      try {
        fs.unlinkSync(path)
      } catch (err) {
        console.error(err)
      }
    });
  }, config.detect_interval);
}

main();