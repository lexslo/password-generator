// Assignment code here
// variable to hold different criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "\"!#$%&()\'*+,-./:;<=>?@[\]^_`{|}~";

// when generate btn is clicked -> prompt for criteria
function generatePassword () {
  // prompt for PW length (between 8 and 128 characters)
  var pwLength = window.prompt("Please type a password length between 8 and 128 characters.");

  if (pwLength < 8 || pwLength > 128) {

    window.alert("That is not a valid password length. Please enter a number between 8 and 128");
    generatePassword();

  } else {

    // alert user of selected password length
    window.alert("Password length is set to " + pwLength + " characters long.");

    // prompt for character types -> include lowercase? uppercase? numbers? special characters?
    var lcConfirm = window.confirm("Please define the password criteria. Are lowercase letters required?");
    var ucConfirm = window.confirm("Are uppercase letters required?");
    var numConfirm = window.confirm("Are numbers required?");
    var scConfirm = window.confirm("Are special characters required?");

    // create variable to hold user selected criteria and new password
    var userCriteria = "";
    var newPassword = "";
    
    if (lcConfirm && ucConfirm && numConfirm && scConfirm) {
      userCriteria = lowercase + uppercase + numbers + specialChar;

      for (var i = 0, n = userCriteria.length; i < pwLength; i++) {
        newPassword += userCriteria.charAt(Math.floor(Math.random() * n) + 1);
      }
      return newPassword;
    } else {
      console.log("not working/not ready yet");
    }
  }
}

// each prompt should be validated
// at least one character type should be selected

// generate password after all prompts are answered
// password is displayed as an alert OR written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
