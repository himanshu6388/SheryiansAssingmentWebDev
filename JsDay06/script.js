// arrays and objects

// var a = 12;

 var b = 33;

 var c = [12, 13]
//  arry ek se jayda vlues ko ek sath store karnre wala data stracture hai 
 var a = [1,2,3,4]

//  What is array
// array is a data structure tht can store multiple values all at once place
var arr = [1,2,3,4]

// why array -> ek se jyada values store karne ke liye


// who uses array -> devs

// when to use array ->  whenever you need to store multiple values

// how to create array -> []
// how to access members of array

var arr1 = [ 1, 2, 3, 4 ]
// console.log(arr[1])
// console.log(arr)
var arr2  = new Array();
arr2[0] = 1;
arr2[1] = 2;
console.log(arr2)

// blank array banao
 var  ar = [];
//  ek array banao jisme 5 element ho
var aarr = [1,2,3,4,5,6,7,8,9,10,11]

var arr3 = new Array(20)
console.log(arr3.length)


for (var i=0; i<30; i++){
    arr3[i] = i;
}

// console.log(arr3)
// js mein arrays mein hum log ke sath ek se jyada values  store kar sakte hai par chahe to alag data type ki value bhi store kar sakkte hai

// homogeneous -> same type values
// javascript is not a homogeneous
 
var arr4 = [1, 2, 3, 4, "name", true]

//  object 

var obj = {};
// what is object-> sirf ek tarika hai key  value pairs ko hold karne ka
var obj1 = {
    // property:vlue
    name:"Himanshu",
    age : 12,
    email:"him@gmail.com"
}

var ckm = {
    name:"ckm",
    color:"whhite",

}
var phone ={
    name:"iPhone 13 pro max",
    color:"green",
    cameras:3,
    price:100000
}

var sheryians = {
    name:"sheryians coding school",
    location:"bhopal",
    students:500,
    teachers:100,
    faculty:20
}




// why object -> storing infromation about information


// when to make an object
// when you want to store the info of one entity

//how to create a object
 var obj = {
    // propertey : value
 }
// how to access an object

var obj5  = {
    name:"himanshu",
    age:20,
    email:"himanshu@gmail.com",
}