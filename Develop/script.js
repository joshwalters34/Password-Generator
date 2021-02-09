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


//arrays to pull in and generate my password
var arrLength = [];
var arrLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrSpecial = ["!", "@", "#", "$", "%", "&", "*"];


// function for user prompts and to push the arrays into the master password array (userValues)
function generatePassword() {
  var userValues = [];

  var charLength = prompt("Choose a password length between 8 and 128 characters.");
     if (charLength < 8 || charLength > 128 || !Number.isInteger(charLength)) {
      alert ("Password must be between 8 and 128 characters.");
      // var noPassword = document.getElementById ("password");
      // password.placeholder = 
      document.getElementById("password").value = "no password";
      document.getElementById("password").placeholder = "No password generated";
      return;
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
    
    var stringPassword = ""; //this is saying that the password starts as blank

    for (var i = 0; i < charLength; i++) {
      var passValue = passDisplay(userValues); //this pulls the individual array into userValues
      var finalValue = passDisplay(passValue); //this pulls a character from the array
      stringPassword = stringPassword + finalValue;
    }

    return stringPassword;
}