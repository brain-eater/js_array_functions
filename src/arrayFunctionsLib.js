const map = function(callBackFunc,list){
  let mappedList = [];
  for(let ele of list){
    mappedList.push(callBackFunc(ele));
  }
  return mappedList;
}

exports.map = map;

const filter = function(callBackFunc,list){
  let filteredList = [];
  for(let ele of list){
    if(callBackFunc(ele)){
      filteredList.push(ele);
    }
  }
  return filteredList;
}

exports.filter = filter;
