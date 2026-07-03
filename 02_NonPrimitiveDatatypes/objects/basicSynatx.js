// let student = {
//     name : "Praveen",
//     rollNo : 135 ,
//     branch : "IT",
//     cgpa : 7.8
// }

// // DOT Noatation
// console.log(student.name); 
// console.log(student.cgpa); 

// //Bracket Notation
// console.log(student["name"]);
// console.log(student["cgpa"]); 

// // updating value of a key 
// student.cgpa = 8.5;
// console.log(student["cgpa"]);

// // add new properties
// student.address = "Delhi";

// // delete properties
// delete student.address;


// // Nested objects
// let student1 = {
//     name : "Praveen",
//     rollNo : 135 ,
//     branch : "IT",
//     cgpa : 7.8,
//     marks : {
//         Physics : 33,
//         chemistry : 40,
//         maths : 35
//     }
// }

// console.log(student1.marks.maths);


// // Objects Inside Arrays 
// let student1 = [
//     {name : "Praveen", rollNo : 135 ,},
//     {branch : "IT", gpa : 7.8,},
//     { marks : {
//         Physics : 33,
//         chemistry : 40,
//         maths : 35
//     } }
// ]
// console.log(student1[2].marks.Physics);

// //This is how data often comes from databases and APIs.


// // methods in objects

// let student2 = {
//     name : "Praveen",
//     rollNo : 135 ,
//     branch : "IT",
//     cgpa : 7.8,
//     marks : {
//         Physics : 33,
//         chemistry : 40,
//         maths : 35
//     } ,
//     result : function(){
//         (this.marks.Physics < 33 || this.marks.chemistry<33 || this.marks.maths < 33) ? console.log("Fail") : console.log("Pass");
//     }
// }
// // console.log(`Physics : ${student2.marks.Physics} , chemistry : ${student2.marks.chemistry} , Maths : ${student2.marks.maths}`);
// // console.log(student2.result());

// console.log(Object.keys(student2));
// console.log(Object.values(student2));
// console.log(Object.entries(student2));
// for(let key in student2){
//     console.log(key,student2[key]);
// }

// // objetcs are pass by refrence 
// let student3 = {
//     name : "Praveen",
//     rollNo : 135 ,
//     branch : "IT",
//     cgpa : 7.8
// }
// console.log(student3.name);

// student4 = student3;

// console.log(student4.name);

// student4.name = "Ankit";

// console.log(student3.name); // Ankit !!!
// console.log(student4.name); // obvious Ankit

