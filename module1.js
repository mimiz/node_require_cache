var myDatas = Object.assign({}, require('./datasProxy'));

module.exports = {
  log:function(){
    lowerCaseName()
    console.log(myDatas);
  }
}

function lowerCaseName(){
  myDatas.name = myDatas.name.toLowerCase();
}
