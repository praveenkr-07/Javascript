function reverseArrayPart(arr,start,end){ // start and end are  indices
    while(start <= end) {
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
}

function rotateRight(arr, k){
    let n = arr.length;
    k = k % n;
    reverseArrayPart(arr,0,n-k-1);
    reverseArrayPart(arr,n-k,n-1);
    reverseArrayPart(arr,0,n-1);
}
let arr = [1,2,3,4,5,6,7];
let k = 2;

let str1 = "";
for(let value of arr){
    str1 += value + " ";
}
console.log(str1.trim()); 

rotateRight(arr,2);

let str2 = "";
for(let value of arr){
    str2 += value + " ";
}
console.log(str2.trim());