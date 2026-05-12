
const base_url = "https://www.google.com";
//base_url = "https://www.facebook.com"; //TypeError: Assignment to constant variable.
console.log(base_url);
let name = "John";
name = "Doe"; //reassigning value to variable name
{
    let name = "Alice"; //block scope variable name
}
console.log(name);