//rest parameters
 function abc(a,b,c,...d){
     console.log(a,b,c,d)
 }

 abc(1,2,3,4,5)

// hoisting -> js mein variable and function unko js deceleration  wala part top pe move kr deta hai, aur isey kahte h hoisting

 console.log(a)
var a = 12;


// iife -> immediately invoke function expression

(function abcd(){
    console.log("Hello")
}
)();


//hofs -> ek aesa function jo return kare function nhito acctept kare function in paremeter , ya fir dono
function xyz(){
    return function(){
        // console.log("Hello World")
        return function(){
            console.log("Hey")
        }
    }
}
xyz()()();


function xy(fnc){
    // fnc();
}

xy(function(){
    console.log("How  are you?")
})

// cb fnc




// first calss fnc -> first class function ek darja hai jo ki js mein fncs ko mila hai , is darje mein kaha jaata hai ki fncs ko aap value ki tarah use kar skate ho
 var a = function(){
    console.log("Hello")
 }

 function ab(val){

 }
 ab(function(){


 })



// impure function -> A function that modifies external state
total = 0 ; 
function addToTotal(){
    total += a; // modifies external state
}
addToTotal(5);
console.log(total); //5



// pure function -> a function without side efffects (does not modiify external state)
function  abcde(a, b){
    return a + b; //no external modfication
}
console.log(add(2,3));





// global scope
var a =12;
function aaa(){
    console.log(a)
}




// local scope 
function bbb(){
    var a = 12;
    console.log(a)
}




// closures ->  ek function hai joismein function return karta hai ek aur function and returned fnction mein aap use karte ho parent fucntion koi data
function adb(){
    var a = 12;
    return function(){
        console.log(a)
    }
}

var ans = abb();