// Find the second largest element.

function secondLargest(arr){
    let Flargest = Number.MIN_SAFE_INTEGER;
    let Slargest = Number.MIN_SAFE_INTEGER;
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]>Flargest) {
            Slargest = Flargest;
            Flargest = arr[i];
        }
        else if(arr[i]>Slargest && arr[i]!==Flargest){
            Slargest = arr[i];
        }
    }
    return Slargest;
}

let arr = [37,28,43,-4,13,-13,57,47,0];
console.log(secondLargest(arr));

let arr2 = [1,2,3,4,5,6,7];
console.log(secondLargest(arr2));