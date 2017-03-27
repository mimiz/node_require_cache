delete require.cache[require.resolve('./datas.json')];
var myDatas = require('./datas.json');

module.exports = {
  log:function(){
    console.log(myDatas);
  }
}
