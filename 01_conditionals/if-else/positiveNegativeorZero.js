function func(x){
    if(x <  0 ) console.log(`${x} is negative number.`);
    else if(x >  0 ) console.log(`${x} is positive number.`);
    else console.log(`${x} is Zero.`);
}
let num = 3;
func(num);
num = -4;
func(num);
num = 0;
func(num);
