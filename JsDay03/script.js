// String Method

//1 Slice
let str = "apple";
console.log(str.slice(0,2));

//2 Template string

let str1 = `Hey my age is ${12+2}`
console.log(str1)

//3 split

let str2 = "Hello How are You?"
let ans = str2.split(' ')
console.log(ans)

//4 replace

let str4 = "Hello Ji kaise ho"
let ans4 = str4.replace('i', 'y')
let a = str4.replaceAll('i', 'y')
console.log(ans4)

//5 include

let str5 = "Hello, world";
let ans5 = str5.includes(",")
console.log(ans5)

// Conditional  Statements

// if elase

let b = 2;
if(a>111){
    console.log("true")
}
else{
    console.log("false")
}