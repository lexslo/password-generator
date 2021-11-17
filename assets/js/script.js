// variables to hold different criteria
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

    // declare variables to hold user selected criteria and new password
    var lcConfirm;
    var ucConfirm;
    var numConfirm;
    var scConfirm;
    var userCriteria = "";
    var newPassword = "";

    // function to prompt for character types -> include lowercase? uppercase? numbers? special characters?
    function getCriteria() {

      lcConfirm = window.confirm("Please define the password criteria. Click OK for Yes and Cancel for No. Are lowercase letters required?");
      ucConfirm = window.confirm("Are uppercase letters required? Click OK for Yes and Cancel for No.");
      numConfirm = window.confirm("Are numbers required? Click OK for Yes and Cancel for No.");
      scConfirm = window.confirm("Are special characters required? Click OK for Yes and Cancel for No.");
      // check that at least one criteria was selected
      if (lcConfirm == false && ucConfirm == false && numConfirm == false && scConfirm == false) {
        window.alert("NO CRITERIA SELECTED. PLEASE CONFIRM AT LEAST ONE PASSWORD CRITERIA TYPE.");
        // run prompts again if none were selected
        getCriteria();  
      }
    }

    getCriteria();

    // check for confirmations and concat criteria if true
    if (lcConfirm) userCriteria = userCriteria.concat(lowercase);
    if (ucConfirm) userCriteria = userCriteria.concat(uppercase);
    if (numConfirm) userCriteria = userCriteria.concat(numbers);
    if (scConfirm) userCriteria = userCriteria.concat(specialChar);

    // generate password after all prompts are answered
    for (var i = 0, n = userCriteria.length; i < pwLength; i++) {
      newPassword += userCriteria.charAt(Math.floor(Math.random() * n));
    }
    return newPassword;

  }
}

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
