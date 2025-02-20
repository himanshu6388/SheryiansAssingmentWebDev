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
// console.log(ans)

//4 replace

let str4 = "Hello Ji kaise ho"
let ans4 = str4.replace('i', 'y')
let a = str4.replaceAll('i', 'y')
// console.log(ans4)

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

// else if

let x = 12;
if(a>13){
    console.log("hey")
}else if(a>11){
    console.log("hey2")
}

// ternary operator
12>11?console.log("hey"):console.log("Hello");

// Switch statement

// switch(value){
//     case value:
        //code
    //     break;
    // case value:
    //     //code
    //     break;
    // default: 
    //     //default code

// }
let j
switch("Himanshu"){
    case "Himanshu":
        console.log("Hey Himanshu");
        break;
    case "Rajesh":
        console.log("Hey Rajesh");
        break;
    default:
        console.log("Hello");
}

             // Loops 

// for  loop
/*
 for(start ; condition; increment){
         code statement
 }
*/

for (let i =1; i<5; i++){
    // console.log("Hey");
}
// straightforward loop
for  ( let i = 12 ;i<23; i++){
    // console.log(i);
}
// dynamic loop
let arr = [ 1,2,3,4,5,6,7];

for(let i =0; i<arr.length; i++){
    // console.log(arr[i]);
}


// while loop

/*
start;
 while(condition){
         code statement
 }
*/

let i =1;
while(i<10){
    // console.log(i)
    i++;
}

// do while loop

/*
do{
         code statement
 }
while(condition);
*/

let n = 1;
do{
    // console.log(n)
    n++
}while(n<12);


// Break & Continue

for  (let i = 0; i<=10; i++){
    // console.log(i);
    if(i==5) break;
}
for  (let i = 0; i<=10; i++){
    if(i==5) continue;
    console.log(i);
    
}