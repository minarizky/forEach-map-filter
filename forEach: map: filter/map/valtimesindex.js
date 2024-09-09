function valTimesIndex(arr) {
    return arr.map(function(val, index) {
        return val * index;
    });
}

// Test cases
console.log(valTimesIndex([1, 2, 3])); // [0, 2, 6]
console.log(valTimesIndex([1, -2, -3])); // [0, -2, -6]
