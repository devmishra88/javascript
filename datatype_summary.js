// Primitive Data Type

// 7 Types : String, Number, Boolean, null (0 not empty), undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const secondId = Symbol('123')

console.log(id)
console.log(secondId)

console.log(id === secondId) //this will return false

const bigNumber = 12345678912345678n //big int number

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Reference Type (Non Primitive Data Type)

// Array, Objects, Functions

const heros = ["nagraj", "scd", "doga"]
const objects = {
    name: "Devesh",
    age:34
}

const myFunction = function(){
    console.log("Hello word");    
}

/*
Stack and Heap memory
//Stack (Primitive), Heap (Non-Primitive)

Stack (Primitive) - jb bhi stack memory use hota hai to hmne jo variable declear kra hai uska ek copy milta hai

Heap (Non-Primitive) - jb bhi Heap use me aata hai to variable ka reference milta hai
*/

let mySiteName = "dealcorner.in"

