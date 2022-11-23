// Assignment Code
var charNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getPasswordCriteria() {
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var options = {
    userChoseNumbers: userChoseNumbers
  };
  return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
    var userChose = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];
    if(userChose.userChoseNumbers) {
      availableChars = availableChars.concat(numbers);
    }

    for(var i = 0; i < 4; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }


  return passwordArr.join("")
}

/* Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 /*let charUpperCs = prompt("Would you like to use upper case letters?");
  if (charUpperCs === true)

  
  
  else prompt = ("Try again! You must select between 1-10.")
  if (charNumSpecial >= 11)
  return alert = ("Try again! You must select between 1-10.")
  

 //if (pwlength === )*/

  /*confirm("Would you like to use Lower Case letters?");
  if ()*/





// var generateBtn = document.querySelector("#generate");

//Write password to the #password input
/*function writePassword() {}
  var password = generatePassword();
  var charNum = ["0","1","2","3","4","5","6","7","8","9"];
  var charLowerCs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var charUpperCs = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
  var charSpec =   ["!","@","#","$","%","^","&","*","(",")"]
  var passwordText = document.querySelector("#password");

  for (var x = 0; x <=pwlength.length; x++) {}
  passwordText.value = password;*/



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
