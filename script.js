// Arrays Utilized
var charNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var charLowerCs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var charUpperCs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charSpec =   ['!','@','#','$','%','^','&','*','(',')']

function getPasswordCriteria() {
  var userPickNumbers = confirm('Hello Human! Do you want numbers in your password?');
  var userPickLowerCs = confirm('Do you want lower case letters in your password?');
  var userPickUpperCs = confirm('Do you want upper case letters in your password?');
  var userPickCharSpec = confirm('Do you want special characters in your password?');
  var options = {
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

function generatePassword() {
    var userPick = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];
    if(userPick.userPickNumbers) {
      availableChars = availableChars.concat(numbers);
    }

    for(var i = 0; i < 4; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }


  return passwordArr.join('')
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
