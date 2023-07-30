const generatePassword = () => {
  const charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "~`!@#$%^&*()_-+={[]}|:;<>,.?\\\"",
  };

  let password = "";
  let charSelection = "";

  // Ask user for password length
  let length;
  do {
    length = prompt("Enter Password Length (8-128 Characters):");
  } while (length < 8 || length > 128);

  // Ask user for character types
  if (confirm("Use lowercase characters?")) charSelection += charSets.lowercase;
  if (confirm("Use uppercase characters?")) charSelection += charSets.uppercase;
  if (confirm("Use numbers?")) charSelection += charSets.numbers;
  if (confirm("Use special characters?")) charSelection += charSets.special;

  // If user selects nothing
  if (charSelection.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  // Create password
  for (let i = 1; i <= length; i++) {
    password += charSelection[Math.floor(Math.random() * charSelection.length)];
  }
  return password;
}

// Write password to the #password input
const writePassword = () => {
  document.querySelector("#password").value = generatePassword();
}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
