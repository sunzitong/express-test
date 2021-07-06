const { default: axios } = require('axios');
const express = require('express');
const app = express();
const post = require('./routes/post')
const port = 3389;

app.use(express.json());

app.post('/submit', (req, res) => {
  console.log('req', req.body);
  axios({
    method: 'post',
    url: 'https://lincoln.iooo.net/media_test/core.php/api/apply/media',
    data: req.body
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => {
    res.status(err.response.status).send(err.response.data);
  })
})

app.listen(port, () => {
  console.log(`Express serve listening at http://localhost:${port}`)
})