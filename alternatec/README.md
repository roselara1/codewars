Problem Domain:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!


Challenge Link: https://www.codewars.com/kata/alternate-capitalization/javascript


Code Provided:
function capitalize(s){
  return [];
};


My Solution Process: I need to have the input of the strings given added to an array. One to process even and one to process odd indexes. Then it needs to capitalize the even index characters and account for 0 to be even as well. After that they must be put together and returned.