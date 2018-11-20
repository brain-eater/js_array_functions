const lib = require("../src/arrayFunctionsLib.js");
const map = lib.map;
const assert = require("assert").deepEqual;

const square = function(number){
  return number*number;
}

const testMap = function(func,input,expectedOutput){
  let actualOutput = map(func,input);
  console.log("Testing with",input);
  assert(actualOutput,expectedOutput);
}

testMap(square,[],[]);
testMap(square,[2],[4]);
testMap(square,[1,2,3],[1,4,9]);

console.log("Checking whether input is changing or not ");
let numbers = [1,2,3,4,5];
let squares = map(square,numbers);
assert(numbers,[1,2,3,4,5]);

console.log("checking whether it returning same array reference");
map(square,[1,2]);
assert(squares,[1,4,9,16,25]);
