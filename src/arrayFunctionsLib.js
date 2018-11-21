const map = function(callBackFunc, list) {
  let mappedList = [];
  for (let ele of list) {
    mappedList.push(callBackFunc(ele));
  }
  return mappedList;
};

exports.map = map;

const filter = function(callBackFunc, list) {
  let filteredList = [];
  for (let ele of list) {
    if (callBackFunc(ele)) {
      filteredList.push(ele);
    }
  }
  return filteredList;
};

exports.filter = filter;

const reduce = function(callBackFunc, list, accumulator) {
  if (list.length == 1) {
    if (accumulator != undefined) {
      return callBackFunc(accumulator,list[0]);
    }
    return list[0];
  }

  return callBackFunc(
    reduce(callBackFunc, list.slice(0, list.length -1),accumulator),
    list[list.length-1]
  );
};

exports.reduce = reduce;

