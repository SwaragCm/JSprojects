// Function to check if a sentence is a pangram (contains every letter of the alphabet at least once)
function isPanagram(sentence) {
    // Define the alphabet as a string for comparison
    alpha = 'abcdefghijklmnopqrstuvwxyz';

    // Convert the input sentence to lowercase to make the comparison case-insensitive
    sentence = sentence.toLowerCase();

    // Iterate through each character in the alphabet
    for (let i = 0; i < alpha.length; i++) {
        const character = alpha[i];
        
        // Check if the current character of the alphabet is not present in the sentence
        if (!sentence.includes(character)) {
            // If any character is missing, print "not panagram" and exit the function
            console.log("not panagram");
            return;
        }
    }

    // If all characters are found in the sentence, print "panagram"
    console.log("panagram");
}

const phrase = 'Pack my box with five dozen liquor jugs.';
isPanagram(phrase);
