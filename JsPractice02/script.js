//  map

var arr = [1,2,3,4,5];

const ar = arr.map((el)=>{
    return el
})
console.log(ar)

// filter
const f = arr.filter((el)=>{
    return el >2
})
console.log(f)


// reduce

const  r = arr.reduce((accumulator, key)=>{

    return accumulator + key
    // console.log(key)
},0)

// console.log(r)


//3.  Loops 

// 11 Write a for loop to print numbers from 10 to 1 in reverse.
let i = 10;
while(i> 0){
    // console.log(i)
    i--;
}


// 12 Use a while loop to print multiple of 3 fromm 3 to 30.
let j = 1;
while(j<=10){
    // console.log(3*j)
    j++;
}



// 13 Write a Program to calculate the usm of numbers from 1 to 100 using a loop.
let k = 1;
let sum = 0
while(k<=100){
    sum += k; 
    k++
}
// console.log(sum)


// 14 Create a nested loop to print a star pattern.
for(let i = 1; i<=5;i++){
    let star = ""
    for(let j =i;j<=i;j++){
        star += "*"
    }
    // console.log(star)
}

// 15 Use a for..of  loop to iterate over the string "JavaScript".
var str = "JavaScript";
for(var a of str){
    console.log(a)
}

//  4. Arrays

// 16 Remove duplicates values from an array
 var arr  = [1,1,1,1,2,3,4,5,5,6,7,7,8,8,8,9,9];
 var uniqueArr = [...new Set(arr)]
 console.log(uniqueArr)


// 17 Find the second largest number in an array.

// 18. Sort a array in desceding order.

// 19. Reverse an array without using.reverse().

// 20. Find the most frequent element in an array.

let str1 = "Js"
for (let char of str1){
    console.log(char + char)
}