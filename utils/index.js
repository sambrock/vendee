const fs = require('fs');
const path = require('path');
const request = require('request');

const getAllFiles = (dirPath) => {
  files = fs.readdirSync(dirPath);

  let filesArr = [];

  files.forEach(file => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      filesArr = getAllFiles(dirPath + "/" + file, filesArr)
    } else {
      filesArr.push(path.join(__dirname, dirPath, file))
    }
  });

  return filesArr;
}

const getTotalSize = (dirPath) => {
  const filesArr = getAllFiles(dirPath);

  let totalSize = 0;

  filesArr.forEach(filePath => {
    totalSize += fs.statSync(filePath).size
  });

  return totalSize;
}

const download = function (uri, filename, callback) {
  request.head(uri, () => {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const removeImage = path => {
  try {
    fs.unlinkSync(path)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { getAllFiles, getTotalSize, download, removeImage };