const config = require('../config');
const { getTotalSize, download } = require('../utils');

const capture = () => {
  setInterval(() => {
    if (getTotalSize('../detect/captures') > config.max_captures_filesize) {
      console.log('Capture limit...')
      return;
    };

    download(config.pi_stream, `./captures/${Date.now()}.jpg`, () => {
      console.log(`${Date.now()}.jpg saved`);
    });
  }, config.capture_interval);
}

module.exports = capture;