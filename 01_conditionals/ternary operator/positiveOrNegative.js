function func(x){
    (x <  0 ) ? console.log(`${x} is negative number.`) : console.log(`${x} is positive number.`);
}
let num = 3;
func(num);
num = -4;
func(num);
