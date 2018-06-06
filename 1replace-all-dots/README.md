FIXME: Replace all dots

Problem Domain: The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.
Task
Fix the bug so we can all go home early.
Notes
String str will never be null.

Challenge Link: https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

Code Provided:
var replaceDots = function(str) {
  return str.replace(/./, '-');
}

My Solution: At first I checked w3schools.com to find more information about string.replace but it would not work using their methods. Then I tried https://alligator.io/js/string-replace/ and learned about adding a \ and not just using the g to make it search for dots globally. That made the solution finally work!
Refer to solution.js file