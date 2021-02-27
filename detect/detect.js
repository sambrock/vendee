const fs = require('fs');
const tf = require('@tensorflow/tfjs-node-gpu');
const cocoSsd = require('@tensorflow-models/coco-ssd');

const capture = require('./capture');

const getCaptures = async () => {
  try {
    const files = await  fs.promises.readdir('./captures');
    files.forEach(file => imageClassification(model, `./captures/${file}`));
  } catch (err) {
    console.error(err);
  }
}

const readImage = path => {
  //reads the entire contents of a file.
  //readFileSync() is synchronous and blocks execution until finished.
  const imageBuffer = fs.readFileSync(path);
  //Given the encoded bytes of an image,
  //it returns a 3D or 4D tensor of the decoded image. Supports BMP, GIF, JPEG and PNG formats.
  const tfImage = tf.node.decodeImage(imageBuffer);
  return tfImage;
}

const detect = async (path) => {
  const model = await cocoSsd.load();
  
  const image = readImage(path);
  // Classify the image.
  const predictions = await model.detect(image);
  console.log(path, predictions);
}

capture();