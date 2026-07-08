delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countDown(seconds) {
    for(let i = seconds; i >= 1 ; i--){
        console.log(i);
        console.log("↓");
        await delay(1000);
    }
    console.log("Blast Off 🚀");
}

countDown(10);