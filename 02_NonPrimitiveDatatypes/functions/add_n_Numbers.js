
// rest operator 
// ... converts all the arguments into an array
// and we can do anything with it 
// we can call a fucntion before its definition but for the code execution function mist be in the coode
// function addNumber(...nums){
//     let sum = 0;
//     for(let val of nums) sum+=val;
//     return sum;
// }

// console.log(addNumber(1,2));

// one more use of REST operator
// const arr = [1,2,3,4,5]
// // const [first,second] =  arr;
// // console.log(first,second); // 1 ,2 

// // what about another numbers remaining in the array
// const [first,second,...nums] = arr;
// console.log(first,second,nums); // 1 2 [ 3, 4, 5 ]

//another representation of function
// we can,t call a  fucntion before its definition ,
// but for the code execution function must be in the coode

// const sumTwoNumber = function (num1,num2){
//     return num1+num2;
// }
// console.log(sumTwoNumber(5,3));


//Maximum of Two Numbers

// const max = (num1,num2) => ((num1>num2)?num1 : num2);
// console.log(max(2,4));

// // factorial
// const factorial = (num) => {
//     let fact = 1;
//     for(let i = 2 ; i <= num ; i++) fact*=i;
//     return fact;
// }
// console.log(factorial(5));