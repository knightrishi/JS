//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt 
// JavaScript is a dynamically typed language
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined value just like garbage value of cpp

const id = Symbol('123')//uniqe value
const anotherId = Symbol('123')//unique value not equal to id

console.log(id === anotherId);//f

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}//object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
/**Return type of variables in JavaScript
1) Primitive Datatypes Stack 
       Number => number
       String  => string
       Boolean  => boolean
       *null  => object*******
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes HEAP memory
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
        */
