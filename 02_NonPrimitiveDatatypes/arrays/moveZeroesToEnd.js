// Move all zeros to the end.
function moveZeroesToEnd(arr){
    let n = arr.length;
    let j  = 0;
    for(let i = 0; i<n ;i++){
        if(arr[i] !==  0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            j++;
        }
    }
    return arr;
}
let arr = [1,0,5,0,3,2,0,0,6];
moveZeroesToEnd(arr);
let str = "";
for(let val of arr) str += val + " ";

console.log(str.trim());
