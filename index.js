let express = require('express');
let app = express();
let mongoose=require('mongoose');

let uri ='mongodb+srv://master:worker@cluster0.9rrfkpc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri);
let worker = require('./worker');

app.get('/',(req,res)=>{
  res.send('server check diem danh');
});

app.get('/diemdanh/:id',(req,res)=>{
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress ||  null;
  new worker({
    workername:req.params.id,
    ip:ip,
    package:JSON.stringify({
      "name": "server-diemdanh",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node inex"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.18.2",
        "mongoose": "^6.8.1"
      }
    })
  }).save();
  res.send('your ip: '+ ip);
});

app.listen(8080);
