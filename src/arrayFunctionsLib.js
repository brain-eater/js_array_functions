const map = function(mapper, list) {
  let mappedList = [];
  for (let ele of list) {
    mappedList.push(mapper(ele));
  }
  return mappedList;
};

exports.map = map;

const filter = function(predicate, list) {
  let filteredList = [];
  for (let ele of list) {
    if (predicate(ele)) {
      filteredList.push(ele);
    }
  }
  return filteredList;
};

exports.filter = filter;

const generateSafeReducer = function(reducer) {
  return function(accumulator, ele) {
    if (accumulator == undefined) {
      return ele;
    }
    return reducer(accumulator, ele);
  };
};

const reduce = function(reducer, list, accumulator) {
  if (list.length == 0) {
    return accumulator;
  }

  let safeReducer = generateSafeReducer(reducer);
  let length = list.length;
  return safeReducer(
    accumulator,
    reduce(reducer, list.slice(1, length), list[0]),
  );
};

exports.reduce = reduce;
