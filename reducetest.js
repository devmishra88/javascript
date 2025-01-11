const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const initialValue = 0;
// const initialValue = undefined;

const sumofarray1 = array1.reduce((accumulator, currentValue)=> accumulator + currentValue, initialValue)

console.log(sumofarray1)