// Merge two sorted arrays.
function mergeTwoSortedArray(arr , brr){
    let i = 0;
    let j = 0;
    let k = 0;
    let crr =[];
    while(i<arr.length && j < brr.length){
        if(arr[i]<=brr[j]){
            crr[k]=arr[i];
            k++;
            i++;
        }
        else{
            crr[k]=brr[j];
            k++;
            j++;
        }
    }

    if(i===arr.length){
        while(j<brr.length){
            crr[k]=brr[j];
            k++;
            j++;
        }
    }
    else if(j === brr.length){
        while(i<arr.length){
            crr[k]=arr[i];
            k++;
            i++;
        }
    }
    return crr;
}
let arr1 = [1,3,5];
let arr2 = [2,4,6];
let arr3 = mergeTwoSortedArray(arr1,arr2);

for(let val of arr3) console.log(val);

