// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var button = document.getElementById("generate");


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", charLength);
document.getElementById("generate").addEventListener("click", charLowerCase);
document.getElementById("generate").addEventListener("click", charUpperCase);
document.getElementById("generate").addEventListener("click", charNumber);
document.getElementById("generate").addEventListener("click", charSpecial);


function charLength () {
  var userEntry = prompt("Choose a password length between 8 and 128 characters.");
  if (userEntry < 8 || userEntry > 128 || userEntry != 'number') 
 {
    alert ("Password must be between 8 and 128 characters.");
    window.prompt ("Choose a password length between 8 and 128 characters.");
  } //else if 
  //(typeof userEntry !== 'number') {
   // alert ("Entry must be a number.");
    //window.prompt ("Choose a password length between 8 and 16 characters.");
  //}
}


function charLowerCase() {
  window.confirm("Include a lowercase letter in your password?");
}

function charUpperCase() {
  window.confirm ("Include an uppercase letter in your password?");
}

function charNumber() {
  window.confirm ("Include a number in your password?");
}

function charSpecial() {
  window.confirm ("Include a special character in your password?");
}

//var special = [!@#$%^&*];

//prompts for each value of the password
//var charLength = window.prompt ("Choose a length between 8 and 16 characters.");
//var charLowerCase = window.prompt ("Include a lowercase character in your password?");
//var charUpperCase = window.prompt ("Include an uppercase character in your password?");
//var charSpecial = window.prompt ("Include a special character in your password?");
//var charNumber = window.prompt ("Include a number in your password?");
