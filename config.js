const config = {
  models: {
    1: {
      model: `${__dirname}/detect/models/coco-ssd/saved_model`,
      classes: `${__dirname}/detect/models/coco-ssd/classes`
    },
    2: {
      model: `${__dirname}/detect/models/custom/saved_model`,
      classes: `${__dirname}/detect/models/custom/classes`
    }
  },

  dtype: 'int32',
  min_score: 0.5,
  max_results: 50,
  iou_threshold: 0.1,

  cameras: [
    { id: 1, stream: 'http://192.168.0.33:8080/?action=snapshot' },
  ],

  max_captures_filesize: 524288000, // 500 MB
  capture_interval: 1000,

  dynamic_pricing_interval: 3600000, // 1 HOUR
};

module.exports = config;