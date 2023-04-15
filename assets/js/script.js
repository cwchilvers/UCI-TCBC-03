// Assignment code here
function generatePassword() {
  var userInput;
  var letter;
  var number;
  var symbol;
  var i = 1;
  var password = "";
  let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let numbers = ["0","1","2","3","4","5","6","7","8","9"];
  let symbols = ["~","\`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">","?",".","\\", "\""];
  var passwordArray = [];

  length = prompt("Enter Password Length (8-128 Characters):");

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
