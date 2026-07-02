// There are 7 primitive datatypes in JS  
// boolean , string , number , bigint , undefined , symbol , null
// primitive datatypes means datatypes has no methods
// js automatically detect the datatyeps ont he basis of values
// we dont have to separtely guve hte datatype unlike c++ like (string str = "hello")
// C , C++ , Java => statically dynamically typed language 
// javascript is dynamically typed language 

let str = "Praveen"; // string
console.log(typeof str,' : ' ,str);


str = 2; // number
console.log(typeof str,' : ' ,str);


str = 2n; //bigint => if we place n atlast in the number then it is bigint
console.log(typeof str,' : ' ,str);


str = true; // boolean
console.log(typeof str,' : ' ,str);


// undefined:
// If a variable is declared but not initialized,
// JavaScript automatically assigns it the value undefined.
// It means the variable has not been given a value yet.

let str1;
console.log(typeof str1, ":", str1); // "undefined" : undefined

// null:
// If a variable is explicitly assigned null,
// it means the programmer intentionally wants it to have "no value" or be empty.

// Note:
// typeof null returns "object". This is a historic bug in JavaScript
// that has been preserved for backward compatibility.
// However, null is NOT actually an object.
// It is a primitive value.

str1 = null;
console.log(typeof str1, ":", str1); // "object" : null

