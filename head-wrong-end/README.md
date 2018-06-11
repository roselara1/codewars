Problem Domain:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false

Challenge Link: https://www.codewars.com/kata/regex-validate-pin-code

Code Provided:
function validatePIN (pin) {
  //return true or false
}

My Solution: I started to think of the previous regex we worked with to verify a username. Using the parameter of [0-9], I can check for numbers, using {4,6}, I can check for length. Then I needed an if else statement to return the true and false parameters.