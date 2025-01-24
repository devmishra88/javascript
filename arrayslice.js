/*The slice() method of Array instances returns a shallow copy of a portion of an array
into a new array object selected from start to end (end not included) where start and end
represent the index of items in that array. The original array will not be modified.*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

/*If we will pass start position this will return from the second index of array*/
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

