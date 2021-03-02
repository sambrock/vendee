const { EventEmitter } = require('events');

const config = require('../config');
const { getTotalSize, download } = require('../utils');

const captureEvent = new EventEmitter();

const capture = camera => {
  setInterval(() => {
    if (getTotalSize('../detect/captures') > config.max_captures_filesize) {
      console.log('Capture limit...')
      return;
    };

    const path = `./captures/${Date.now()}.jpg`;

    download(camera.stream, path, () => captureEvent.emit('capture', path, camera.id));
  }, config.capture_interval);
}

module.exports = { capture, captureEvent };