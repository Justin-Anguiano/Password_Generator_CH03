// Arrays for each character
var charNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var charLowerCs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var charUpperCs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charSpec = ['!','@','#','$','%','^','&','*','(',')'];
//Initial prompt the user here. Created function that displays prompts and collecting criteria.
function getPasswordCriteria() {
  var userPickLength = prompt('Hello Human! How long would you like your password?');
    while(isNaN(userPickLength)) {
      userPickLength = prompt("Please Pick a number.");
    }
    while((userPickLength < 8)||(userPickLength > 128))  {
      userPickLength = prompt("Please enter a number between 7-129.");
    }

  var userPickNumbers = confirm('Do you want numbers in your password?');
  var userPickLowerCs = confirm('Would you like to use lower case letters in your password?');
  var userPickUpperCs = confirm('Would you like to use upper case letters in your password?');
  var userPickCharSpec = confirm('Would you like to use special characters in your password?');
  var options = {
    userPickLength: userPickLength,
    userPickNumbers: userPickNumbers,
    userPickLowerCs: userPickLowerCs,
    userPickUpperCs: userPickUpperCs,
    userPickCharSpec: userPickCharSpec
  };
  return options;
}
function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}
//IF Statements are checking the values that the prompts or confirms stored in variables.
function generatePassword() {
    var userPick = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];
    if(userPick.userPickNumbers) {
      availableChars = availableChars.concat(charNumbers);
    }
    if(userPick.userPickCharSpec) {
      availableChars = availableChars.concat(charSpec);
    }
    if(userPick.userPickLowerCs)  {
      availableChars = availableChars.concat(charLowerCs);
    }
    if(userPick.userPickUpperCs)  {
      availableChars = availableChars.concat(charUpperCs);
    }
    for(var i = 0; i < userPick.userPickLength; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }

  return passwordArr.join("");
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
