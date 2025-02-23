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
//hofs