function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

// Test cases
console.log(doubleValuesWithMap([1, 2, 3])); // [2, 4, 6]
console.log(doubleValuesWithMap([1, -2, -3])); // [2, -4, -6]
