function reverseArray(arr){
    let start = 0;
    let end = arr.length -1;
    while(start <= end) {
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
}

let arr = [1,2,3,4,5,6,7,8];

reverseArray(arr);

let str = "";
for(let value of arr){
    str += value + " ";
}
console.log(str.trim());
