// array stores the multiple values in single variable in contigous manner
//let arr = [10, 20, 30, 40];

//// unlike c++ ; array in js can stores different datatypes
// let studentDetails = [
//     "Praveen" , 135 , true , 'A'
// ]

//// ###############traversing in array############################
//for(let i = 0;i<studentDetails.length;i++) console.log(studentDetails[i]);

//// for ... of loop in js  => for values at each index in arr
//for(let value of studentDetails) console.log(value);

//// for ... in loop in js  => give index 
//for(let index in studentDetails) console.log(index);

//// if we have to print both index and values in pair 
//for(let index in studentDetails) console.log(`${index} : ${studentDetails[index]}`);

//let arr1 = [10,20,30];
// console.log(arr1.length);
// for(let index in arr1) console.log(`${index} : ${arr1[index]}`);

/////############### methods of array ############################
// // pushing an element => go at the end of the array
// arr1.push(40);
// console.log(arr1.length);
// for(let index in arr1) console.log(`${index} : ${arr1[index]}`);


// // push an element from the front
// arr1.unshift(5);
// console.log(arr1.length);
// for(let index in arr1) console.log(`${index} : ${arr1[index]}`);

// // remove an element from the last => pop
// arr1.pop();
// console.log(arr1.length);
// for(let index in arr1) console.log(`${index} : ${arr1[index]}`);

// // remove an element from the last => shift
// arr1.shift();
// console.log(arr1.length);
// for(let index in arr1) console.log(`${index} : ${arr1[index]}`);


// // to check if an element present in the arrays or not
// console.log(arr1.includes(10));
// console.log(arr1.includes(50));

// // to find index of an element
// console.log(arr1.indexOf(10)); // if present give its index
// console.log(arr1.indexOf(50)); // if not in the array return -1

// //Joining => only for strings
// let arr2 = ["Praveen","Kumar","is","a","graduate","student","in","DTU"];
// console.log(arr2.join("-")); // Praveen-Kumar-is-a-graduate-student-in-DTU

// // split
// let arr3 = "Praveen-Kumar-is-a-graduate-student-in-DTU";
// console.log(arr3.split("-")); 
// // [
// //   'Praveen',  'Kumar',
// //   'is',       'a',
// //   'graduate', 'student',
// //   'in',       'DTU'
// // ]

// // slice
// let arr4 = [1,2,3,4,5,6,7,8];
// let temparr = arr4.slice(1,4);
// // return a copy in new arr
// // 1 is included and 4 is excluded
// for(let index in temparr){
//     console.log(`${index} : ${temparr[index]} `);
// }

// //splice 
// let arr5 = [10,20,30,40,50,60,70];
// arr5.splice(1,4);
// // remove the values from index 1 to 4 in original array 
// //doesn't return the copy , change in original array
// for(let index in arr5){
//     console.log(`${index} : ${arr5[index]} `);
// }

// insert using splice
let programmingLanguages = ["C++", "Java", "Python"];

// Goal: Insert "JavaScript" at index 1
// Arguments: start at index 1, delete 0 items, insert "JavaScript"
// programmingLanguages.splice(1, 0, "JavaScript");

// console.log(programmingLanguages); 
// // Output: ["C++", "JavaScript", "Java", "Python"] 

// // delete using splice
// let fruits = ["Apple", "Banana", "Mango"];

// // Goal: Replace "Banana" (at index 1) with "Orange"
// // Arguments: start at index 1, delete 1 item, insert "Orange"
// fruits.splice(1, 1, "Orange");

// console.log(fruits); 
// // Output: ["Apple", "Orange", "Mango"]


// whatever we can do with the help of splice ; can also be done 
// with the help of slice (some exceptions like insertion) . 
// but main difference is slice returns 
// a copy after changes while slice do changes in the original array 

let  arr = [1, 101, 75, 50, 31, 25, -1, 0, -34];
arr.sort((a,b)=> a-b);
console.log(arr);
// (a,b)=> a-b : arrow funciton