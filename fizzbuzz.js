// Define limit for the loop
number = 20;

// Loop through 
for (var i = 1; i <= number; i++) {
    // Check if 'i' is divisible by both 3 and 5 (
    if (i % 15 == 0)
        console.log("FizzBuzz");
    // Check if 'i' is divisible by 3
    else if (i % 3 == 0)
        console.log("Fizz");
    // Check if 'i' is divisible by 5
    else if (i % 5 == 0)
        console.log("Buzz");
    // If 'i' is not divisible by 3 or 5, just print 'i'
    else
        console.log(i);
}
