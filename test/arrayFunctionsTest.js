const lib = require("../src/arrayFunctionsLib.js");
const map = lib.map;
const assert = require("assert");

const square = function(number){
  return number*number;
}

const testMap = function(func,input,expectedOutput){
  let actualOutput = map(func,input);
  console.log("Testing with",input);
  assert(actualOutput,expectedOutput);
}

testMap(square,[],[]);

