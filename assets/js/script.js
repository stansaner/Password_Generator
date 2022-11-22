// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Using an object to collect user options
  // including the password length within the given
  // constraints (numeric), and what kind of characters
  // the password should contain (boolean).
  // This object is then returned to the caller function.
  // Initialize all booleans to false

  var userOptions = {
    passL: 0,
    specChar: false,
    numChar: false,
    lowCase: false,
    upCase: false
    };

  // Validate user input for password length

  for (;true;) {
    var passLength = prompt("Choose the password length (between 10 - 64 characters)");
    if (passLength < 10 || passLength > 64) {
      alert("The password should be between 10 and 64 characters long. Please, try again.");
    } else {
      break;
    }
  }
  
  console.log("Password length: "+passLength);

  userOptions.passL = passLength; 

  // Query the user about each type of characters wanted in the password
  // At least one type must be chosen

  for (;true;) {
    var lowerCase = confirm("Would you like to include lowercase?");
    if (lowerCase) {
      userOptions.lowCase = true;
    }

    var upperCase = confirm("Would you like to include uppercase?");
    if (upperCase) {
      userOptions.upCase = true;
    }

    var numericChar = confirm("Would you like to include numeric characters?")
  
    if (numericChar) {
      userOptions.numChar = true;
    }

    var specialChar = confirm("Would you like to include special characters?");
    if (specialChar) {
      userOptions.specChar = true;
    }

    if(lowerCase || upperCase || numericChar || specialChar) {
      // At least one type of characters was chosen, we are done
      break;
    } else {
      // no type of characters was chosen, repeat the questioning
      alert("Please choose at least one type of characters to include in your password.")
    }
  }

  return userOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomChar = arr[Math.floor(Math.random() * arr.length)];
  return randomChar;
}

// Function to generate password with user input
function generatePassword() { 

  // Concatenate the desired arrays into a single one from which 
  // the characters will be randomly chosen.
  var concatArray = []; // start with an empty array

  var userOptions = getPasswordOptions();

  // Debug messages used for sanity check for the user options
  // Enable/uncomment as needed

  // console.log("Options selected:")
  // console.log("Password length: "+userOptions.passL);
  // console.log("Uppercase: "+userOptions.upCase);
  // console.log("Lowercase: "+userOptions.lowCase);
  // console.log("Numeric: "+userOptions.numChar);
  // console.log("Special Characters: "+userOptions.specChar);

 

  if (userOptions.upCase) {
    concatArray = concatArray.concat(upperCasedCharacters);
  } 
  
  if (userOptions.lowCase) {
    concatArray = concatArray.concat(lowerCasedCharacters);
  } 
  
  if (userOptions.numChar) {
    concatArray = concatArray.concat(numericCharacters);
  } 
  
  if (userOptions.specChar) {
    concatArray = concatArray.concat(specialCharacters);
  }
  
  // The array used to return the full password

  var fullPassword = []; // Initialized as an empty array

  // Generate the desired number of characters from the array formed
  // by concatenation of the arrays corresponding to the user options
  
  for (var i = 0; i < userOptions.passL; i++) {
    fullPassword += getRandom(concatArray);
  }

  return fullPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);