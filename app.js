const express = require('express');
const app = express();
const post = require('./routes/post')
const port = 3000;

app.use(express.json());

app.use('/post', post)

app.listen(port, () => {
  console.log(`Express serve listening at http://localhost:${port}`)
})