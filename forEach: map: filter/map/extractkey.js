function extractKey(arr, key) {
    return arr.map(function(obj) {
        return obj[key];
    });
}

// Test case
console.log(extractKey(
    [
        {name: 'Elie'},
        {name: 'Tim'},
        {name: 'Matt'},
        {name: 'Colt'}
    ],
    'name'
)); // ['Elie', 'Tim', 'Matt', 'Colt']
