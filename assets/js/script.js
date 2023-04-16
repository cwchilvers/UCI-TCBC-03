// Assignment code here
function generatePassword() {
  let password = "";
  let passwordArray = [];
  let i = 1;
  let validInput = false;
  const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numbers = ["0","1","2","3","4","5","6","7","8","9"];
  const special = ["~","\`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">","?",".","\\", "\""];

  // Ask user for password length
  while (validInput === false) {
    length = prompt("Enter Password Length (8-128 Characters):");
    if (length >= 8 && length <= 128) {
      validInput = true;
    }
  }

  while (passwordArray.length === 0) {
    // Ask user for lowercase characters
    if (confirm("Use lowercase characters?") == true) {
      passwordArray = passwordArray.concat(lowercase);
    } 
    // Ask user for uppercase characters
    if (confirm("Use uppercase characters?") == true) {
      passwordArray = passwordArray.concat(uppercase);
    } 
    // Ask user for numbers
    if (confirm("Use numbers?") == true) {
      passwordArray = passwordArray.concat(numbers);
    } 
    // Ask user for special characters
    if (confirm("Use special characters?") == true) {
      passwordArray = passwordArray.concat(special);
    } 
    // If user selects nothing
    if (passwordArray.length === 0) {
      alert("Please select at least one character type.");
    }
  }

  // Create password
  for (i = 1; i <= length; i++) {
    password = password.concat(passwordArray[Math.floor(Math.random()*passwordArray.length)]);
  }

  return password;
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
