var a=10; // global variable a with value 10
console.log(a);
function print(){
    console.log("This is a function");

var a=20; //reassign local variable a with new value 20
console.log(a);
if(true){
    var a=30; //reassign local variable a with new value 30
    console.log(a); 
}
}
print();
