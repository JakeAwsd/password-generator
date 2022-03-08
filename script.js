// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let lengthOption = prompt("How long would you like your password to be? (at least 8 characters and no more than 128 characters)"); 
  let uppercaseOption = prompt("Would you like to include uppercase letters? (please enter: yes or no)"); 
  let lowercaseOption = prompt("Would you like to include lowercase letters? (please enter: yes or no)"); 
  let numericOption = prompt("Would you like to include Numbers? (please enter: yes or no)"); 
  let specialCharactersOptions = prompt("Would you like to include Special characters? (please enter: yes or no)"); 

  var password = generatePassword(lengthOption, lowercaseOption, uppercaseOption, numericOption, specialCharactersOptions);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, lowercase, uppercase, numeric, specialCharacters) {
  var result = '';
  var characters = '';
  if (uppercase == 'yes') {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (lowercase == 'yes') {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  } else {
    characters += '';
  }
  if (numeric == 'yes') {
    characters += '1234567890';
  } else {
    characters += '';
  }
  if (specialCharacters == 'yes') {
    characters += '!@#$%^&*()';
  } else {
    characters +='';
  }
  if (length >= 8 && length <= 128) {
    var characterLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
  } else {
    return result = 'Error: Please read the prompts correctly';
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
