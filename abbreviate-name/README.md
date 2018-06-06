Problem Domain: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

Challenge Link: https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

Code Provided:function abbrevName(name){

    // code away

}


My Solution: My partner and I decided to start with a for loop while we wrote our pseudo code. Once we started to implement it, we realized it would be better to use a var instead. We were trying to find out how to use an array that would work with the var, as we kept getting errors that the code was looking in the wrong places. Using the internet we found out about name.split. This helped us immensely! We also had to learn that we should look at two parts of an array. The first being the position where the names were, first name in position 0 (since arrays start at 0) and second name in position 1. Then we had to account for the position the letters we needed would be, which was 0 for both.  