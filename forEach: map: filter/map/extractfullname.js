function extractFullName(arr) {
    return arr.map(function(obj) {
        return `${obj.first} ${obj.last}`;
    });
}

// Test case
console.log(extractFullName([
  {first: 'Elie', last: 'Schoppik'},
  {first: 'Tim', last: 'Garcia'},
  {first: 'Matt', last: 'Lane'},
  {first: 'Colt', last: 'Steele'}
])); // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
