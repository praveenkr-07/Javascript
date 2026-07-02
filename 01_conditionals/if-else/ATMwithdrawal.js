function AtmWithdrawal(amount){
    let available_amt = 10000;
    if (amount <= 0) {
    console.log("Please enter a valid withdrawal amount.");
    return;
    }
    else if(amount <= available_amt && amount % 100 == 0){
        console.log(`Transaction Successful of Rs. ${amount}`);
        console.log(`Remaining amount in your account is : ${available_amt-amount}`);
        return;
    }
    else {
        if(!(amount <= available_amt)){
            console.log(`available amount isn't sufficient`);
        }
        else if(!(amount % 100 == 0)){
            console.log(`you can only request in the multiple of Rs 100. eg either 100 , 200 , 2100 , 5000 ..`);
        }
        else{
            console.log('Eror Occured Try again Later');
            
        }
        return;
    }
}

AtmWithdrawal(101);
AtmWithdrawal(1000);
AtmWithdrawal(20000);
AtmWithdrawal(-2000);