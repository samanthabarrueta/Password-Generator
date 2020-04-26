// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function numOfChars(passwordLength) {
  var passwordLength = 0;

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('How many characters would you like to include? Choose between 8-128');
  }
  return passwordLength;
}

function typeOfChars(passwordChars) {
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  var passwordChars = [];
    
  var hasNumbers = confirm('Would you like to include numbers 0-9?');  
  var hasLowers = confirm('Would you like to include lowercase letters?'); 
  var hasUppers = confirm('Would you like to include uppercase letters?');
  var hasSpecChars = confirm('Would you like to include special characters?');

  if (hasNumbers === true) {
    passwordChars.push(numbers);
    alert('You have included numbers');
  }
  if (hasLowers === true) {
    passwordChars.push(lowerCase);
    alert('You have included lowercase letters');
  }
  if (hasUppers === true) {
    passwordChars.push(upperCase);
    alert('You have included uppercase letters');
  }
  if (hasSpecChars === true) {
    passwordChars.push(specChars);
    alert('You have included special characters');
  }
  return passwordChars;
}

function generatePassword(passwordLength, passwordChars, password){
  var userLength = numOfChars(passwordLength);
  var userChars = typeOfChars(passwordChars).flat();
  var password = "";

  for (var i = 0; i < userLength; i++) {
    password += userChars[Math.floor(Math.random() * userChars.length)];
  }
  return password;
}
  
