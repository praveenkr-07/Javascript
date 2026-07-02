// If purchase amount is ₹5000 or more
// Discount = 10%
// Else
// Discount = 5%
// Print the discount amount.
function discount(amount){
    if(amount<= 0) return 0;
    const rate = (amount<=5000) ? 0.05 : 0.10;
    return  rate*amount;
    }
console.log(discount(5000));
console.log(discount(50000));   
console.log(discount(0)); 
