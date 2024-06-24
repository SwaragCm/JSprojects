// Define an array of numbers
let array = [3, 4, 1, 2, 6, 7, 6, 4];

// Create a new array with unique values using Set
let uniqueArray = [...new Set(array)];

// Initialize variables to store largest and second largest numbers
let large = 0, secondLarge = 0;

// Loop through the uniqueArray to find the largest and second largest numbers
for (let i = 0; i < uniqueArray.length; i++) {
    // Check if current element is greater than or equal to largest
    if (uniqueArray[i] >= large) {
        // If so, update second largest and largest accordingly
        secondLarge = large; // Move current largest to second largest
        large = uniqueArray[i]; // Update largest with current element
    } else if (uniqueArray[i] > secondLarge) {
        // If current element is greater than second largest (but not largest)
        secondLarge = uniqueArray[i]; // Update second largest
    }
}

// Print the second largest number found
console.log(secondLarge);
