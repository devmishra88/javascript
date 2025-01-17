//Default Behavior (Comma as Separator)
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.join()); 
// Output: "Apple,Banana,Cherry"

//Custom Separator
const fruits2 = ["Apple", "Banana", "Cherry"];
console.log(fruits2.join(" - ")); 
// Output: "Apple - Banana - Cherry"

//No Separator
const numbers = [1, 2, 3, 4];
console.log(numbers.join("")); 
// Output: "1234"

//Handling Empty Slots or undefined/null Values
const arr = ["Hello", undefined, "World", null];
console.log(arr.join(" ")); 
// Output: "Hello  World " (empty strings for undefined/null)

//Joining Nested Arrays
const nested = [["a", "b"], ["c", "d"]];
console.log(nested.join("-")); 
// Output: "a,b-c,d" (does not flatten the array)

//Reverse and Join:
//Write a function to reverse a string using join():

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript")); 
// Output: "tpircSavaJ"

//Create a CSV String
//Given an array of numbers, create a CSV string:

const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.join(",")); 
// Output: "1,2,3,4,5"

//Custom Formatting
//Format an array as a sentence:

const words = ["I", "love", "JavaScript"];
console.log(words.join(" ")); 
// Output: "I love JavaScript"
