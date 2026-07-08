

// Marks >= 40

// ↓

// Resolve("Pass")

// Else

// ↓

// Reject("Fail")

// const myPromise = new Promise((resolve,reject)=>{
//     resolve();
//     console.log("i am promise");
// }) 

function result(marks){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(marks>=40){
                resolve("Passed")
            }
            else{
                reject("Failed")
            }  
        },1000)
    })
}

result(50).then((message)=> {
    console.log(message);
});

result(50).catch((message)=> {
    console.log(message);
});