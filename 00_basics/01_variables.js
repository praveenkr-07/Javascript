// // let key word has  block scope => cannot be access out of the block
{
    let a = 10;
    console.log(a);
}

// // Redefinition is not possible
let b = 12;
let b = 13; // throws an error as redefinition is not allowed

// var keywprd => globally scoped or Function scoped
function show(){
    var c = 10;
    console.log(c);
}

console.log(c);

//Redefinition is allowed
var d = 10;
console.log(d);
var d = 20;
console.log(d);

// const keyword 
const e = 10;
console.log(e);
e = 30; // Reassignment to constant variable is not allowed
console.log(e);  // throws an error

// blokced scope
function print(){
    const f = 15;
    console.log(f);
}
console.log(f);
print();
