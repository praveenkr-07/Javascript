// Remove duplicates from a sorted array.
function removeDuplicates(arr){
    let n = arr.length;
    let j  = 0;
    for(let i = 1; i<n ;i++){
        if(arr[j] !==  arr[i]){
            j++;
            arr[j] = arr[i];
        }
    }
    arr.length = j + 1;  // truncate in place
    return arr;           // now the return value is actually correct
}

let arr = [0,0,1,1,1,2,2,3,3,4,4,4,5,5,6,7,7,8,9,10];
removeDuplicates(arr);
for(let val of arr) console.log(val);