function addKeyAndValue(arr, key, value) {
    arr.forEach(function(obj) {
        obj[key] = value;
    });
    return arr;
}

// Test case
console.log(addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'title',
    'instructor'
));
/*
  [
    {name: 'Elie', title: 'instructor'},
    {name: 'Tim', title: 'instructor'},
    {name: 'Matt', title: 'instructor'},
    {name: 'Colt', title: 'instructor'}
  ]
*/
