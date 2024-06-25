function freq(string) {
    let characterFrequency = {};

    // Iterate over each character in the string
    for (let i = 0; i < string.length; i++) {
        let character = string[i];

        // Check if character 'char' is already a key in the dictionary
        if (characterFrequency[character]) {
            // If it is, increment its corresponding value by 1
            characterFrequency[character]++;
        } else {
            // If it's not, initialize its value to 1
            characterFrequency[character] = 1;
        }
    }

    console.log(characterFrequency);
}

freq('apple')