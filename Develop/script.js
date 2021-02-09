// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// pull random values from array
function passDisplay(arr) {
//  return arr[Math.floor(Math.random() *arr.length)];
  var generatedPass = Math.floor(Math.random() *arr.length);
  return arr[generatedPass]
}

var button = document.getElementById("generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var arrLength = [];
var arrLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrSpecial = ["!", "@", "#", "$", "%", "&", "*"];

function generatePassword() {
  var userValues = [];

  // let lengthInput = prompt ("Choose a password length between 8 and 128 characters.");
  // arrLength.push(lengthInput);

  // function length () 
  var charLength = prompt("Choose a password length between 8 and 128 characters.");
     if (charLength < 8 || charLength > 128) {
      alert ("Password must be between 8 and 128 characters.");
      return;
     }
      else {
        // not needed
      //  userValues.push(charLength);
     } 

  var charLower = confirm("Include a lowercase letter in your password?");
    if (charLower) {
      userValues.push(arrLower);
    }

    var charUpper = confirm("Include an uppercase letter in your password?");
    if (charUpper) {
      userValues.push(arrUpper);
    }

    var charNumber = confirm("Include a number in your password?");
    if (charNumber) {
      userValues.push(arrNumber);
    }

    var charSpecial = confirm("Include a special character in your password?");
    if (charSpecial) {
      userValues.push(arrSpecial);
    }

    if (!charLower && !charUpper && !charNumber &&!charSpecial) {
      alert("Password must contain a lowercase letter, uppercase letter, number, or special character. \n \nPassword not generated.")
      return;
    }
    console.log(userValues);
    
    var stringPassword = "";

    for (var i = 0; i < charLength; i++) {
      var passValue = passDisplay(userValues);
      var finalValue = passDisplay(passValue);
      stringPassword = stringPassword + finalValue;
    }

    return stringPassword;
  }
// function charLength () {
//   var userEntry = prompt("Choose a password length between 8 and 128 characters.");
//   if (userEntry < 8 || userEntry > 128 || userEntry != 'number') 
//  {
//     alert ("Password must be between 8 and 128 characters.");
//     window.prompt ("Choose a password length between 8 and 128 characters.");
// }
// }

// function charLowerCase() {
//   window.confirm("Include a lowercase letter in your password?");
// }

// function charUpperCase() {
//   window.confirm ("Include an uppercase letter in your password?");
// }

// function charNumber() {
//   window.confirm ("Include a number in your password?");
// }

// function charSpecial() {
//   window.confirm ("Include a special character in your password?");
// }

// console.log(userValues);

//var special = [!@#$%^&*];

//prompts for each value of the password
//var charLength = window.prompt ("Choose a length between 8 and 16 characters.");
//var charLowerCase = window.prompt ("Include a lowercase character in your password?");
//var charUpperCase = window.prompt ("Include an uppercase character in your password?");
//var charSpecial = window.prompt ("Include a special character in your password?");
//var charNumber = window.prompt ("Include a number in your password?");

// these get the prompts for the user
// document.getElementById("generate").addEventListener("click", charLength);
// document.getElementById("generate").addEventListener("click", charLowerCase);
// document.getElementById("generate").addEventListener("click", charUpperCase);
// document.getElementById("generate").addEventListener("click", charNumber);
// document.getElementById("generate").addEventListener("click", charSpecial);