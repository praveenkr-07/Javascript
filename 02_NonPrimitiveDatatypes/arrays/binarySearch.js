// Binary Search
function binarySearch(arr,target){
    let n = arr.length;
    let st = 0;
    let end = n-1;
    let mid ;
    while(st <= end){
        mid = st + Math.floor((end - st) / 2);
        if(arr[mid]===target) {
            return true;
        }
        else if (arr[mid]>target) end = mid-1;
        else st = mid+1;
    }
   return false;
}

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
console.log(binarySearch(arr,12));
console.log(binarySearch(arr,31));