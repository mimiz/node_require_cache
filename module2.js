var decache = require('decache');
decache('./datas.json');
var myDatas = require('./datas.json');

module.exports = {
  log:function(){
    console.log(myDatas);
  }
}
