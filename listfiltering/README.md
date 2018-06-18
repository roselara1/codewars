Problem Domain: 
Create a function that takes a list of non-negative (positive) integers and strings and returns a new list with the strings filtered out.


Challenge Link: https://www.codewars.com/kata/list-filtering/train/javascript

Code Provided:
function filter_list(l) {
  // Return a new array with the strings filtered out
}


My Solution: I chose to try to use a for loop for this solution. First I worked with an array to put the info into. Then through a for loop it looked through the array. I found "Number.isInteger" when looking through MDN and Stack Overflow and it was the only thing that worked better than using .splice or .filter. Finally it returned the array that had been filtered.