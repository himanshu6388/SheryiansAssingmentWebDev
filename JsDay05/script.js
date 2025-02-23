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

// impure function