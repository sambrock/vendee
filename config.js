const config = {
  cameras: [
    { id: 'cam_1', stream: 'http://192.168.0.33:8080/?action=snapshot' }
  ],

  max_captures_filesize: 524288000, // 500 MB
  capture_interval: 1000,
};

module.exports = config;