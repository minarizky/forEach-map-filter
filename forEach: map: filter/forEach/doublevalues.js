function doubleValues(arr) {
    let doubled = [];
    arr.forEach(function(val) {
        doubled.push(val * 2);
    });
    return doubled;
}

// Test cases
console.log(doubleValues([1, 2, 3])); // [2, 4, 6]
console.log(doubleValues([5, 1, 2, 3, 10])); // [10, 2, 4, 6, 20]
