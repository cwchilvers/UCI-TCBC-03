// Assignment code here
function generatePassword() {
  var i = 1;
  var password = "";
  let lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let numbers = ["0","1","2","3","4","5","6","7","8","9"];
  let special = ["~","\`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">","?",".","\\", "\""];
  var passwordArray = [];

  // Ask user for password length
  length = prompt("Enter Password Length (8-128 Characters):");

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

  while (i <= length) {
    password = password.concat(passwordArray[Math.floor(Math.random()*passwordArray.length)]);
    i++;
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
