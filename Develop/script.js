function userOptions(userSelects) {
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  var userSelects = [];
    
  var hasNumbers = confirm('Would you like to include numbers 0-9?');  
  var hasLowers = confirm('Would you like to include lowercase letters?'); 
  var hasUppers = confirm('Would you like to include uppercase letters?');
  var hasChars = confirm('Would you like to include special characters?');

  if (hasNumbers === true) {
    userSelects.push(numbers);
    alert('You have included numbers');
  }
  if (hasLowers === true) {
    userSelects.push(lowerCase);
    alert('You have included lowercase letters');
  }
  if (hasUppers === true) {
    userSelects.push(upperCase);
    alert('You have included uppercase letters');
  }
  if (hasChars === true) {
    userSelects.push(specChars);
    alert('You have included special characters');

  return userSelects;
  console.log(userSelects);
  }
}