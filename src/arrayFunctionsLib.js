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

const reduce = function(reducer, list, accumulator) {
  if (list.length == 1) {
    if (accumulator != undefined) {
      return reducer(accumulator,list[0]);
    }
    return list[0];
  }

  return reducer(
    reduce(reducer, list.slice(0, list.length -1),accumulator),
    list[list.length-1]
  );
};

exports.reduce = reduce;

