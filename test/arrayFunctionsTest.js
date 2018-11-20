const lib = require("../src/arrayFunctionsLib.js");
const map = lib.map;
const deepEqual = require("assert").deepEqual;

const square = function(number){
  return number*number;
}

const stringLength = function(text){
  return text.length;
}

describe('map',function(){
 //Testing map for square function
 it('should return squares of array values',function() {
   deepEqual(map(square,[]),[]);
   deepEqual(map(square,[1]),[1]);
   deepEqual(map(square,[1,2]),[1,4]);
 });

 //Testing map for inputs as string
 it('should find the length of strings in an array',function() {
   deepEqual(map(stringLength,[]),[]);
   deepEqual(map(stringLength,["computer"]),[8]);
   deepEqual(map(stringLength,["computer","abcd"]),[8,4]);
 });
});
