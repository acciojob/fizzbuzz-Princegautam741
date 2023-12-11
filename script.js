// Write a program that prints the numbers from 1 to 20 using alert.

let result = "";

for (let i = 1; i <= 20; i++) {
    // Check for multiples of both three and five
    if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz\n";
    }
    // Check for multiples of three
    else if (i % 3 === 0) {
        result += "Fizz\n";
    }
    // Check for multiples of five
    else if (i % 5 === 0) {
        result += "Buzz\n";
    }
    // Append the number itself as a string
    else {
        result += i.toString() + "\n";
    }
}

// Display the result in a single alert
alert(result);
