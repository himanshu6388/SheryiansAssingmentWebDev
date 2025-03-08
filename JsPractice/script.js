 //1.  Console and basic operations 

 //1.1  print hello world three type

console.log("Hello World");
console.warn("Hello World");
console.error("Hello World");
console.info("Hello World");

//  1.2 Perform 35*2-(10/2)+7 and log the result
console.log(35*2 - (10/2) + 7)  // 72


// 1.3 log the data tyep of "123", 123,  true, and null using typeof
 console.log(typeof "123")
 console.log(typeof 123)
 console.log(typeof true)
 console.log(typeof null)
// 1.4 Write a program that swaps the values of two variables.
 var a = 12
 var b = 13
 var c = a;
 var a =b;
 var b = c
 console.log("a =", a)
 console.log("b =",b)


// 1.5 Use console.group() to organize logs into groups.
// console.group("Aaj ka Hisaab");
console.groupCollapsed("Aaj ka Hisab")
console.log("Daal Chawal");
console.log("Neembu pani");
console.group("Nested group")
console.log("one");
console.groupEnd()
console.log("Pani puri")
console.groupEnd();


// 2. Variables and objects

// 6 Declare a const obect, modify its properties, and log the updated object.

const obj = {
    name:"himanshu",
    age:20,
    email:"test@example.com"
}
// constants se value of cahnge nhi kar sakte update kar sakte  hai
console.log(obj)
obj.age = 32;
console.log(obj)

const obj2 = {
    name:"him",
    age:20,
    email:"him@example.com"
}
 Object.freeze(obj2) // its freeze the object we can't update value after usingn this method


//  7 jConvert "50" (string) into number using 3 different methods.

console.log(typeof Number("40"))
console.log(typeof  parseInt(Number("50")))
console.log(typeof +"60")

// 8 Check if "JavaScript" contains "Script" without using .incluldes()

let str  = "JavaScript";

str.indexOf("Script")
console.log(str.indexOf("Script") !== -1) ///true
console.log(str.indexOf("Scripta") !== -1) //false

// 9 Create an array of 5 numbers and log the sum using .reduce()
var  arr = [1, 2, 3, 4, 5];

const r = arr.reduce(function(acc, val){
    return acc + val
},0)
console.log(r)
// 10 Explain the differnece between undefined, null, and NaN with examples.
// undefinded -> jab varaable banaye aur valule assign na kare tab phir value udefined hogi

var x;
console.log(x) // undefined

// null -> null ka matlab  hai value na hona

// NaN ->  mathmaatical invalid calculation
console.log("harsh" * 12) 