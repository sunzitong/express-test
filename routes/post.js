const express = require('express');
const request = require('request');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
  axios({
    method: 'get',
    // url: 'https://lincoln.iooo.net/media_test/core.php/api/apply/media',
    url: 'http://m.test109.iguanyu.com/app-server/api/v1/main/clientConfig1',
    // data: {
    //   USERNAME: 'cjzz',
    //   PASSWORD: window.md5(`123456${Date.now()}`),
    //   TIMESTAMP: Date.now(),
    //   SOURCE: 'cjzz',
    //   CONTENT: JSON.stringify(payload),
    // },
  }).then((a,b,c) => {
    console.log('a',a);
    console.log('b',b);
    console.log('c',c);
  }).catch((e) => {
    console.log('e' ,e);
  });
  // request('http://m.test109.iguanyu.com/app-server/api/v1/main/clientConfig', (error, response, body) => {
  //   console.log('error:', error);
  //   console.log('response.statusCode:', response.statusCode);
  //   console.log('body:', body);
  //   // if (!error && response.statusCode === 200) {
  //   //   var data = JSON.parse(body);
  //   //   res.send(data);
  //   // } else {
  //   //   res.send('{error:404}');
  //   // }
  //   res.send(JSON.parse(body))
  // });
})

router.post('/', (req, res) => {
  console.log('保存文章', req.body);
  res.status(201).send({
    id: 2,
    ...req.body,
  });
})

module.exports = router;