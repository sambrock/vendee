const axios = require('axios');

const processPredictions = (predictions, camId) => {
  // if (!predictions) {
  //   console.log(predictions);
  //   return;
  // };

  // // Occupancy
  // const arr = predictions.filter(p => p.class === 'person');

  // axios({ method: 'post', url: 'http://localhost:3001/api/occupancy/', data: { camId, count: arr.length } });

  // console.log(arr.length);

  predictions.map(p => {
    // console.log(p.kept, p.dataId);
    // console.log(p.kept, p.dataId);
  })
}

module.exports = { processPredictions };