// Define a string variable
var text = "Malayalam";

// Convert the string to lowercase
var word = text.toLowerCase();

// Calculate the length of the string minus one
var wordLength = word.length - 1;

// Initialize an empty string to store the reversed word
var reverse = "";

// Iterate through the characters of the word from the end to the beginning
for (let i = wordLength; i >= 0; i--) {
    // Retrieve each character and append it to the 'reverse' string
    let character = word[i];
    reverse += character;
}

// Check if the reversed word is equal to the original word
// If they are equal, print "palindrome", otherwise print "not palindrome"
console.log(reverse == word ? "palindrome" : "not palindrome");
