/*
    CIT 281 Project 2
    Name: Jane Duncan
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
  result += alphabet[getRandomInteger(1, alphabet.length - 1)];
}

console.log(result);

// return a single, random, lowercased letter
function getRandomLetter() {
  let randomIndex = getRandomInteger(0, alphabet.length - 1);
  result = alphabet[randomIndex];
  return result.toLowerCase();
}

for (let i = 0; i < 1; i++) {
  console.log(getRandomLetter());
}

//retrun a random length string
function getRandomString(minLength, maxLength) {
  result = "";
  randomLength = getRandomInteger(minLength, maxLength + 1);
  for (let i = 0; i < randomLength; i++) {
    result = result + getRandomLetter();
  }
  return result;
}
console.log(getRandomString(10, 20));

//return a string in acsending (a-z) order
function getSortedString(string) {
    return string.split("").sort().join(""); //Split turns the 
    //string into an array so that we can use the sort method which only
  //works on arrays 
  }
  console.log(getSortedString("xpacd"))
