let asyncRegister = (message) => {
    return new Promise ((resolve , reject ) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        },1000)
    })
}
let asyncDocuments = (message) => {
    return new Promise ((resolve , reject ) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        },1000)
    })
}
let asyncFees = (message) => {
    return new Promise ((resolve , reject ) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        },1000)
    })
}  
let asyncConfirmation = (message) => {
    return new Promise ((resolve , reject ) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        },1000)
    })
}
asyncRegister("Register")
    .then(() => asyncDocuments("Verify Docments"))
    .then(() =>asyncFees("Pay Fees"))
    .then(()=>asyncConfirmation("Admission Confirmed"))