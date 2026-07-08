let asyncLog = (message) => {
    return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 1000 );
    });
};
let asyncAddtoCart = (message) => {
  return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 2000 );
    });
};
let asyncPayment = (message) => {
  return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 3000 );
    });
};
let orderPlace = (message) => {
    return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 4000 );
    });
};
asyncLog("Log in ")
        .then(() => asyncAddtoCart("Add to Cart "))
        .then(() => asyncPayment("Payment "))
        .then (()=> orderPlace("Order Placed"));
