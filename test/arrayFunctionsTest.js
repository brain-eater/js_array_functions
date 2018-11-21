const {map,filter,reduce} = require("../src/arrayFunctionsLib.js");
const deepEqual = require("assert").deepEqual;

const square = function(number){
  return number*number;
}

const stringLength = function(text){
  return text.length;
}

const isEven = function(num){
  return num%2 == 0;
}

const returnTrue = function(){
  return true;
}

const add = function(num1,num2){
  return num1+num2;
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

describe('filter',function() {
  it('should return all the array vlaues',function() {
    deepEqual(filter(returnTrue,[]),[]);
    deepEqual(filter(returnTrue,[1]),[1]);
    deepEqual(filter(returnTrue,[1,2]),[1,2]);
    deepEqual(filter(returnTrue,[1,2,3]),[1,2,3]);
  });

  it('should return even numbers',function() {
    deepEqual(filter(isEven,[]),[]);
    deepEqual(filter(isEven,[2]),[2]);
    deepEqual(filter(isEven,[1,2]),[2]);
    deepEqual(filter(isEven,[1,2,3,4]),[2,4]);
  });
});


describe('reduce',function() {
  it('should return sum of array vlaues',function() {
    deepEqual(reduce(add,[1]),1);
    deepEqual(reduce(add,[1,2]),3);
    deepEqual(reduce(add,[1,2,3]),6);
    deepEqual(reduce(add,[1,2,3],10),16);
    deepEqual(reduce(add,[" Puli"],"Tilak"),"Tilak Puli");
    deepEqual(reduce(add,[" Puli"," keerthy"],"Tilak"),"Tilak Puli keerthy");
  });

  it('should not modify orginal array',function() {
    let names = [" Puli"," keerthy"];
    deepEqual(reduce(add,names,"Tilak"),"Tilak Puli keerthy");
    deepEqual(names,[" Puli"," keerthy"]);
  });
});

