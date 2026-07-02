function electricityBill(units) {
    if(units <= 100){
        console.log(`Electricity Bill generated is Rs. ${units*5}`);
        return;
    }
    else if(units >100 && units <= 200){
        let bill = 100*5 + (units - 100 )* 7 ;
        console.log(`Electricity Bill generated is Rs. ${bill}`);
        return;
    }
    else{
        let bill =  100*5 + 100*7 + (units - 200 )*10;
        console.log(`Electricity Bill generated is Rs. ${bill}`);
        return;
    }
}
// First 100 units → ₹5/unit
// Next 100 units (101–200) → ₹7/unit
// Above 200 units → ₹10/unit

electricityBill(80);
electricityBill(150); 
electricityBill(220);