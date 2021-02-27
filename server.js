const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('HI');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on ${port}`));