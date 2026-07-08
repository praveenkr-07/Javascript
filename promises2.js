
function ATM_Withdrawal(amount){
    let balance = 10000;
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
            if(amount <= 0) reject("can't Proceed ! Enter a valid amount to withdraw .");
            else if(amount > balance) reject("can't Proceed ! insufficent Balance");
            else resolve("Proceed to Next -> ")} ,1000)
        })
}
ATM_Withdrawal(0).then((message)=>console.log(message));
    