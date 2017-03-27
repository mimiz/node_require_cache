var datas = require('./datas.json');

module.exports = new Proxy(datas, {
  set:function(){
    return;
  }
});
