import myDatas from './datas';
export default {
  log:function(){
    lowerCaseName()
    console.log(myDatas);
  }
}

function lowerCaseName(){
  myDatas.name = myDatas.name.toLowerCase();
}
