const { cameras } = require('../config');
const { removeImage } = require('../utils');
const { capture, captureEvent } = require('./capture');
const { loadSavedModel, getImageTensor, getPredictions } = require('./detect');
const { processProducts, processTraffic } = require('./predictions');

(async () => {
  // Load models
  const COCO_SSD = await loadSavedModel(1); // Detecting person(s)
  const CUSTOM = await loadSavedModel(2); // Detecting custom objects

  // Start capture devices
  cameras.forEach(c => capture(c));

  // Listen for capture event
  captureEvent.addListener('capture', async (path, camId) => {
    const tensor = getImageTensor(path);

    const people = await getPredictions(COCO_SSD, 1, tensor);
    const products = await getPredictions(CUSTOM, 2, tensor);

    removeImage(path);

    processProducts(products);
    processTraffic(people, camId);
  });
})();
