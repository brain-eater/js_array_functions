const map = function(callBackFunc,list){
  let mappedList = [];
  for(let ele of list){
    mappedList.push(callBackFunc(ele));
  }
  return mappedList;
}

exports.map = map;
