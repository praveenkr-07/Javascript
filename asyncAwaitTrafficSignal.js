let RedSignal = () => {
 return new Promise ((resolve , reject) => {
    setTimeout(()=>{
        resolve();
        console.log("🔴");
    },3000)
 })
}

let YellowSignal = () => {
 return new Promise ((resolve , reject) => {
    setTimeout(()=>{
        resolve();
        console.log("🟡");
    },2000)
 })
}


let GreenSignal = () => {
 return new Promise ((resolve , reject) => {
    setTimeout(()=>{
        resolve();
        console.log("🟢");
    },1000)
 })
}

async function TrafficSignal(){
  await RedSignal();
  await YellowSignal();
  await GreenSignal();
}

TrafficSignal();