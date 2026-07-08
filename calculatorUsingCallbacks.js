
addition = (a,b) => a+b;

multiplication = (a,b) => a*b;

subtraction = (a,b) => a-b;

divison = (a,b) => {if(b!=0) return a/b;
    return {
        message : "divison by 0 is not possible"
    }}


calculator = (a,b,operation) =>  operation(a,b);

console.log(calculator(1,2,addition));
console.log(calculator(1,2,subtraction));
console.log(calculator(1,2,multiplication));
console.log(calculator(1,2,divison));
console.log(calculator(1,0,divison));