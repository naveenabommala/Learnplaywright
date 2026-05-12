var a=10;
console.log(a);
function print(){
    var a=20; //reassign local variable a with new value 20
    console.log("This is a function");
    if (true){
        var a=30; //reassign local variable a with new value 30
        console.log(a);   
     }
     console.log("f->",a);
}
print();