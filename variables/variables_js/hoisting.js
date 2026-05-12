// hoisting is a JavaScript mechanism where variables and function declarations //
// are moved to the top of their containing scope during the compilation phase.//
//  This means that you can use variables and functions before 
// they are declared in the code. However, 
// only the declarations are hoisted, not the initializations.

console.log("This is hoisting example");
var a ="Hello";
console.log(a);
console.log(g );
var  g ="nav";
console.log(g);