let asynReceive = (message) => {
    return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 1000 );
    });
};
let asyncPrepare = (message) => {
  return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 2000 );
    });
};
let asyncDelivery = (message) => {
  return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 3000 );
    });
};
let orderStatus = (message) => {
    return new Promise ((resolve, reject) => { 
    setTimeout(()=>{
    console.log(message);
    resolve();
    }, 4000 );
    });
};
async function foodDelivery(){
    await asynReceive("Order Received");
    await asyncPrepare("Start Preparing");
    await asyncDelivery("Out For Delivery");
    await orderStatus("Delivered");
}
foodDelivery();