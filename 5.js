// 1. Basic Calculator using Promises
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Inputs must be numbers.");
        } else {
            switch (operation) {
                case 'add':
                    resolve(num1 + num2);
                    break;
                case 'subtract':
                    resolve(num1 - num2);
                    break;
                case 'multiply':
                    resolve(num1 * num2);
                    break;
                case 'divide':
                    if (num2 === 0) {
                        reject("Cannot divide by zero.");
                    } else {
                        resolve(num1 / num2);
                    }
                    break;
                default:
                    reject("Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
            }
        }
    });
}

// Example usage of the calculator:
calculator(10, 5, 'add')
    .then(result => console.log(`Addition result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));

calculator(10, 0, 'divide')
    .then(result => console.log(`Division result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));


// 2. Custom Iterator for Squaring Numbers in an Array
const squareIterator = {
    array: [1, 2, 3, 4, 5],
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                if (index < this.array.length) {
                    let value = this.array[index] ** 2;
                    index++;
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Example usage of the custom iterator:
console.log("Squares of array elements:");
for (let square of squareIterator) {
    console.log(square); // Output: 1, 4, 9, 16, 25
}


// 3. Prime Number Generator using JavaScript Generators
// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generator function for prime numbers up to a limit
function* primeGenerator(limit) {
    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

// Example usage of the prime number generator:
console.log("Prime numbers up to 20:");
const primes = primeGenerator(20);
for (let prime of primes) {
    console.log(prime);  // Output: 2, 3, 5, 7, 11, 13, 17, 19
}
