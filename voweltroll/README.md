Problem Domain: Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

Challenge Link: https://www.codewars.com/kata/disemvowel-trolls/javascript

Code Provided:
function disemvowel(str) {
  return str;
}


My Solution: The first thing we knew is that we had to add the vowels a,e,i,o,u to have them be removed from the string. The function should allow for a string to go in and search it globally for all versions of vowels, which means upper and lower case. For this we used "i" and for the global search we used "g".