// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function randomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var passwordLength = Number(prompt("How long should I make this password?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Invalid entry. Password must contain at least 8 characters and no more than 128 characters."
    );
    return generatePassword();
  } else if (isNaN(passwordLength)) {
    alert("That wasn't a number.");
    return generatePassword();
  }
  var userWantslowercase = window.confirm(
    "Should I include lowercase letters?"
  );
  var userWantsUppercase = window.confirm(
    "Should I include uppercase letters?"
  );
  var userWantsSymbols = window.confirm("Should I include symbols?");
  var userWantsNumbers = window.confirm("Should I include numbers?");
  alert("One sec while I generate a password!");
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercase = [];

  for (i = 0; i < lowercase.length; i++) {
    uppercase[i] = lowercase[i].toUpperCase();
  }

  var options = [];

  if (userWantslowercase === true) {
    options.push(lowercase);
  }
  if (userWantsUppercase === true) {
    options.push(uppercase);
  }
  if (userWantsNumbers === true) {
    options.push(numbers);
  }
  if (userWantsSymbols === true) {
    options.push(symbols);
  }

  if (options.length === 0) {
    alert("You didn't select a character type.");
    return;
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = randomItem(options);
    var randomChar = randomItem(randomList);
    generatedPassword += randomChar;
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
