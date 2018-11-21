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
  it('should return empty array when empty array is given as input',function() {
    deepEqual(map(square,[]),[]);
  });

  it('should work if only one element is given',function() {
    deepEqual(map(square,[2]),[4]);
  });

  it('should work with more than one elements',function() {
    deepEqual(map(square,[2,3,4]),[4,9,16]);
  });

  it('should not modify original array',function() {
    let numbers = [2,3,4];
    deepEqual(map(square,numbers),[4,9,16]);
    deepEqual(numbers,[2,3,4]);
  });
});

describe('filter',function() {
   it('should return empty array when empty array is given as input',function() {
    deepEqual(filter(returnTrue,[]),[]);
  });

  it('should return all elements when filter returns true for all',function() {
    deepEqual(filter(returnTrue,[3,4,5,2]),[3,4,5,2]);
  });

  it('should return nothing when filter returns false for all',function() {
    deepEqual(filter(() => false,[3,4,5,2]),[]);
  });

  it('should work with more than one elements',function() {
    deepEqual(filter(x => x%2==0,[2,3,4]),[2,4]);
  });

  it('should not modify original array',function() {
    let numbers = [2,3,4];
    deepEqual(filter(returnTrue,numbers),[2,3,4]);
    deepEqual(numbers,[2,3,4]);
  });
});


describe('reduce',function() {
  it('should work with one element',function() {
    deepEqual(reduce(add,[1]),1);
  });

  it('should work more than  one element',function() {
    deepEqual(reduce(add,[1,2]),3);
    deepEqual(reduce(add,[1,2,3]),6);
  });

  it('should support accumulator',function() {
    deepEqual(reduce(add,[1,2,3],10),16);
    deepEqual(reduce(add,[" Puli"],"Tilak"),"Tilak Puli");
  });

  it('should operate on array from index 0 ',function() {
    deepEqual(reduce(add,[" Puli"," keerthy"],"Tilak"),"Tilak Puli keerthy");
  });

  it('should not modify orginal array',function() {
    let names = [" Puli"," keerthy"];
    deepEqual(reduce(add,names,"Tilak"),"Tilak Puli keerthy");
    deepEqual(names,[" Puli"," keerthy"]);
  });
});

