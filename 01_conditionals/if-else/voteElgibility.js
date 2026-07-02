function eligibility(age){
    if(age>= 18) console.log(`your age is ${age} and you are elgible to vote.`);
    else console.log(`your age is ${age} and you arn't elgible to vote.`);
}

let age = 15;
eligibility(age);

age = 18;
eligibility(age);

age = 45;
eligibility(age);