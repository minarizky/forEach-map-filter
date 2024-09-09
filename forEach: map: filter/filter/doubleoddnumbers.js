function doubleOddNumbers(arr) {
    return arr
        .filter(function(num) {
            return num % 2 !== 0; // Keep only odd numbers
        })
        .map(function(num) {
            return num * 2; // Double each odd number
        });
}

// Test cases
console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // [2, 6, 10]
console.log(doubleOddNumbers([4, 4, 4, 4, 4])); // []
