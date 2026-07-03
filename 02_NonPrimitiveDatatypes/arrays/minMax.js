function maxElement(arr){
    let maxm = Number.MIN_SAFE_INTEGER;
    for(let i = 0;i<arr.length;i++){
    if(maxm<arr[i]) maxm = arr[i];
    }
    return maxm;
}
function minElement(arr){
    let minm = Number.MAX_SAFE_INTEGER;
    for(let i = 0;i<arr.length;i++){
    if(minm > arr[i]) minm = arr[i];
    }
    return minm;
}
let arr = [1,-2,33,4,0,-6,77.9,80];
console.log(maxElement(arr));
console.log(minElement(arr));