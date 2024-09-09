function find(arr, value) {
    return arr.find(function(element) {
        return element === value;
    });
}

// Test cases
console.log(find([1, 2, 3, 4, 5], 3)); // 3
console.log(find([1, 2, 3, 4, 5], 10)); // undefined
