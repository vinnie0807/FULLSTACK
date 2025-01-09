// without parameter and argumements
// function demo(){
//     console.log("Hello i am function demo")
// }
// demo();

// with parameter and argumements
// function add(a,b){
//     // console.log(a);
//     // console.log(b);
//     console.log(a+b);
// }
// add(5,6)

// function add2(a,b){
//     // console.log(a);
//     // console.log(b);
//     console.log(a+b);
// }
// add2(7,58)
// function addtocart(){
//     document.body.style.backgroundColor = "red";
// }

//this is funtion called as named function
// function ispalindrome(str){
//     let revStr = '';
//     for(let i = str.length-1; i>=0; i--){
//         revStr += str[i];
//     }
//     if(revStr == str){
//         console.log("Palindrome");
//     }else{
//         console.log("Not Palindrome");
//     }
// }
// ispalindrome("madam");
// ispalindrome("hello");

// anonymous function
// function(){
//     console.log("This is anonymous function");
// }

// function expression
// let x = [1,2,3,4,5];
// console.log(x);
// let x = function(){
//     console.log("function expression");
// }
// // console.log(x);
// x();
// x();

// // !IIFE
// (function(){
//     console.log("IIFE");
// })();

// arrow fdunction

// let x= A =>
//     console.log(A);
// ;x(10);

// let x = _ => {console.log("Hello");
//              console.log("Bye");
//              console.log("hi");}
// x();

// return statement - implicit return and explicit return

//THIS IS EXPLICIT RETURN
// function add(a,b){
//     console.log("this is start of return statement");
//     return a+b;
//     console.log("this is end of return statement");
// }
// let x = add(5,4);
// console.log(x);
 
let x = (a,b) => a+b; // implicit return
console.log(x(5,4));

let y = (a,b) => {
    console.log("this is explicut return");
    return a+b;// explicit return
}
console.log(y(5,4));