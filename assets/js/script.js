// Assignment code here

// when generate btn is clicked -> prompt for criteria
// after criteria, prompt for PW length (between 8 and 128 characters)
// prompt for character types -> include lowercase? uppercase? numbers? special characters?

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
