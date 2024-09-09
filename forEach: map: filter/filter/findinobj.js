function findInObj(arr, key, value) {
    return arr.find(function(obj) {
        return obj[key] === value;
    });
}

// Test case
console.log(findInObj(
  [
    {first: 'Elie', last: 'Schoppik'},
    {first: 'Tim', last: 'Garcia', isCatOwner: true},
    {first: 'Matt', last: 'Lane'},
    {first: 'Colt', last: 'Steele', isCatOwner: true}
  ],
  'isCatOwner',
  true
));
// {first: 'Tim', last: 'Garcia', isCatOwner: true}
