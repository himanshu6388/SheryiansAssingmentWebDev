// 4. Arrays 

// remove duplicates values from arrays

var arr = [1,1,2,3,4,4,5,5,5,6,7,7,7,8,8,9];

var uniqueArray = [...new Set(arr)];
console.log(uniqueArray);