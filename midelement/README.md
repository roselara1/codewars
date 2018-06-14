Problem Domain:
Write a function that when given a triplet, returns the index of the numberical element between the other two elements. 
Ex: gimme([2,3,1]) => 0
2 fits between 1 and 3, and the index of 2 in the original is 0.


Code Link:
https://www.codewars.com/kata/find-the-middle-element/train/javascript

Code Given:
var gimme = function (inputArray) {
};

Credit: I used MDN docs to learn about how .splice and .split work because I was unsure about which one would be best for this function. We also removed the math.floor once we saw that .splice was the better option.