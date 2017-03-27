var datas = require('./datas.json');

module.exports = function(){
  return clone(datas);
}

function clone(datas){
  return JSON.parse(JSON.stringify(datas));
}
