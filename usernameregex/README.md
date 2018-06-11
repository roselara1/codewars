Problem Domain: Write a regex to validate a username. Only use lowercase letters, numbers and underscore. The length should be between 4 and 16 characters.

Code Given: 
function validateUsr(username) {
  res = //your code here
}


Kata Link: https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/train/javascript



Solution Explanation: First Tyler and I realized that we had to do some research on what regex was! We put together what we learned in the lecture along with what we found online to see what we could write. We first started writing 3 seperate lines: one for lowercase letters [a-z], one for numbers [0-9] and one for length (4,16). After that we worked through different solutions to see which would be best. We arrived at one that worked all but 4 times and realized we needed to make it a global scope, so the /g was added.