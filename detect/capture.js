const { EventEmitter } = require('events');

const config = require('../config');
const { getTotalSize, download } = require('../utils');

const captureEvent = new EventEmitter();

const capture = () => {
  setInterval(() => {
    if (getTotalSize('../detect/captures') > config.max_captures_filesize) {
      console.log('Capture limit...')
      return;
    };

    const path = `./captures/${Date.now()}.jpg`;

    download(config.pi_stream, path, () => captureEvent.emit('capture', path));
  }, config.capture_interval);
}

module.exports = { capture, captureEvent };