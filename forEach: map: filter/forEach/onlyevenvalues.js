function onlyEvenValues(arr) {
    let evens = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            evens.push(val);
        }
    });
    return evens;
}

// Test cases
console.log(onlyEvenValues([1, 2, 3])); // [2]
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2, 10]
