// Assignment code here

// when generate btn is clicked -> prompt for criteria
function generatePassword () {
  // prompt for PW length (between 8 and 128 characters)
  var pwLength = window.prompt("Please type a password length between 8 and 128 characters.");

  if (pwLength < 8 || pwLength > 128) {

    window.alert("That is not a valid password length. Please enter a number between 8 and 128");
    generatePassword();

  } else {

    // prompt for character types -> include lowercase? uppercase? numbers? special characters?
    window.alert("Password length is set to " + pwLength + " characters long.");
    var pwCriteria = window.prompt("What is the required password criteria? Type LC for lowercase, UC for uppercase, NUM for numbers, and SC for special characers. To include more than one criteria type, separate each code with a space and a comma. For example, for uppercase, numbers, and special characters, you would type: UC, NUM, SC");
    
    // make user input all uppercase for easier comparison
    pwCriteria = pwCriteria.toUpperCase();
    
    // put user input into an array to index each criteria listed
    pwCriteriaArr = pwCriteria.split(", ");
    
    for (var i = 0; i < pwCriteriaArr.length; i++) {
      console.log(pwCriteriaArr[i]);
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
