function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return key in obj;
    });
}

// Test case
console.log(filterByValue(
    [
      {first: 'Elie', last: 'Schoppik'},
      {first: 'Tim', last: 'Garcia', isCatOwner: true},
      {first: 'Matt', last: 'Lane'},
      {first: 'Colt', last: 'Steele', isCatOwner: true}
    ],
    'isCatOwner'
)); 
/*
  [
    {first: 'Tim', last: 'Garcia', isCatOwner: true},
    {first: 'Colt', last: 'Steele', isCatOwner: true}
  ]
*/
