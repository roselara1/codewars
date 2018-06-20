Problem Domain: 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.


Challenge Link: 
https://www.codewars.com/kata/highest-scoring-word/train/javascript

Code Provided:
function high(x){

}



My Solution: We first tried to use an array but that was not working with the regex that I had placed into the function. I tried going back into my previous solutions to see what regex might work best and knew that we would have to split the words so that we can get values. Finally after reading more MDN docs, we attempted to use math.max, along with a better regex that implemented a tracking of the words in the array and got values. We first tried charCodeAt but using UNICODE values. However, we could not get it to pass all the test with this. Then we switched to using the ACSII values and subtracted by 96 since a starts at 97.