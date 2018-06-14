'use strict'

var gimme = function (inputArray) {
  let secondArray = inputArray.slice().sort(function(a,b) { return a-b;});
  return inputArray.indexOf(secondArray[1]);
};