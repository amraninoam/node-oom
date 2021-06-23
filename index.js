'use strict';
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(8000, function () {
  console.log('Listening to Port 8000');
});


let path = require('path');
require('node-oom-heapdump')({
    path: path.resolve(__dirname, 'my_heapdump')
});

const list = [];
setInterval(()=> {
  const record = new MyRecord();
  list.push(record);
},10);

function MyRecord() {
  var x='hii';
  this.name = x.repeat(10000000);
  this.id = x.repeat(10000000);
  this.account = x.repeat(10000000);
}
setInterval(()=> {
  console.log(process.memoryUsage())
},100);