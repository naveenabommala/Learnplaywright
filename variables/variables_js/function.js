//function is code resuable in nature 
//function is a block of code which performs a specific task and 
//can be reused in the program

function add(a,b){
    return a+b;
}
add(2,3); //5
add();
console.log(add(2,3)); //5
console.log(add()); //30clear

function greet(){
console.log("Hello, welcome to JavaScript!");
}
//calling of function
greet(); //Hello, welcome to JavaScript!
