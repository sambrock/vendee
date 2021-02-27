const request = require('request');
const MjpegConsumer = require('mjpeg-consumer');
const FileOnWrite = require('file-on-write');

const capture = () => {
  const writer = new FileOnWrite({
    path: './captures',
    ext: '.jpg'
  });

  const consumer = new MjpegConsumer();

  request('http://192.168.0.33:8080/?action=stream').pipe(consumer).pipe(writer);
}

module.exports = capture;