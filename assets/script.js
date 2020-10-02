/* // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */

document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
// Initial prompt for password length 

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be?"));

    // Loop if answer if answer isn't between 8 and 128
  
      while(confirmLength <= 7 || confirmLength >= 129) {
      alert("The password must be between 8-128 characters, Please try again");
      var confirmLength = (prompt("How many characters would you like your password to be?"));
      } 

      // Prompt Confirming the length of password you selected

      alert(`Your password will have ${confirmLength} characters`);

      // Four different prompts to determine what characters will be used

      var confirmLowerCase = confirm("Click OK to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to include uppercase characters");
      var confirmSpecialCharacter = confirm("Click OK to include special characters");
      var confirmNumericCharacter = confirm("Click OK to include numeric characters");   

      // Loop when the answer doesn't have at least one option selected
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("Please select at least one option");

        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");   
    } 
      // Actions for the different prompt options

      var passwordCharacters = []
      
      if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
      }
  
      if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
      }
  
      if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
      }
  
      if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
      }
  
        // Empty string to be filled
        var randomPassword = ""
        
        for (var i = 0; i < confirmLength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword)
        }
        return randomPassword;
  }
  
  // Write password 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

