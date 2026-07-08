// Order Received

// ↓

// Restaurant Preparing

// ↓

// Delivery Partner Picked

// ↓

// Delivered

function foodDelivery(message , nextProcess){
    setTimeout(()=>{
        console.log(message);
        if(nextProcess) {
            nextProcess();
        }
    },2000);
}

foodDelivery("Order Received" , () =>{
    foodDelivery("Restaurant Preparing" , () => {
        foodDelivery("Delivery Partner Picked" , () => {
            foodDelivery("Delivered");
        })
    })
})