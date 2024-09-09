function showFirstAndLast(arr) {
    let result = [];
    arr.forEach(function(str) {
        if (str.length > 0) {
            result.push(str[0] + str[str.length - 1]);
        }
    });
    return result;
}

// Test cases
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'test'])); // ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // ['hi', 'ge', 'se']
