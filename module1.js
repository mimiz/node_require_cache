var decache = require('decache');
decache('./datas.json');
var myDatas = require('./datas.json');

module.exports = {
  log:function(){
    lowerCaseName()
    console.log(myDatas);
  }
}

function lowerCaseName(){
  myDatas.name = myDatas.name.toLowerCase();
}
