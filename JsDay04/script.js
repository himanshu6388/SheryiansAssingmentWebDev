// Functions

// What is function
//block of code  which we cann reuse
function abcd(){
    // statements
}

function greet(){
    console.log("Hello!")
}
// function cahlao
greet();
// why function
// jab bhi code turant  nhi chalana  aur aap ko reuse karna h tab function banate h
function abc(){
    console.log("Hello World")
}
// why we need function
// To reuuse some code which is too long to write


// how  to create function

function name(){
    // statements
}
const fnc = ()=>{
    // statements
}
// how to call a function

function hi(){
    console.log("Hi")
}
// calling
hi();

// What is Parameter -> 

// how to pass  a parameter to a function
  function  greeting(g){

    console.log(g)
  }

  greeting("Hello");
//   greeting("Hi");
//   greeting("How are You?")


// how to pass argument to a function
function num(a, b,c,d){

    console.log(a, b, c, d)
  
}
num(1,2,3,4,5,6)  //argument


// types of  functions

//1. functions statement
function ab(){
    // function statement
}

//2. function expression
var abcde = function(){
    // function expression
}

//3. Anonymous function
let arr = [1,2,3,4];
arr.forEach(function(){

    // anonymous function
})

//4. fat Arrow function
    let fn = ()=>{


    }
//5. fat arrow with one parameter
 let func = a =>{
    // fat arrow with one parameter
 }
func(12);
//6. fat arrow with implicit return

function funnc(){
     return 10;
}
var ans = funnc()
console.log(ans)


 var x = ()=> 12
 
 var  a = x();
 console.log(a)

//  rest parameter

function xyz(a,b,c,...ckm){
    console.log(a,b,c,ckm)
}

xyz(1,2,3,4,5,6,7,8,9,10);

//hoisting

console.log(a);
var a = 10;


const greet = function(){
    console.log("Hello")
}

greet();

greet = function(){
    console.log("Hello World")
}