// Assignment Code
function askButton() {
  let pwlength = prompt("Hello Human! How many characters would you like in your password, 8-71?");
  if (pwlength <= 7) 
  return alert("Try again please!  Password must be 8-71 characters long!")
  if (pwlength >= 72) {
  return alert("Try again please!  Password must be 8-71 characters long!")
  
}
 //if (pwlength === )*/

  /*confirm("Would you like to use Lower Case letters?");
  if ()*/
}




// var generateBtn = document.querySelector("#generate");

//Write password to the #password input
/*function writePassword() {}
  var password = generatePassword();
  var charNumSpecial = ["1","2","3","4",5,6,7,8,9,0,!,@,#,$,%,^,&,*,(,));
  var charLowerCs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var charUpperCs = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
  var passwordText = document.querySelector("#password");

  for (var x = 0; x <=pwlength.length; x++) {}
  passwordText.value = password;*/



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
