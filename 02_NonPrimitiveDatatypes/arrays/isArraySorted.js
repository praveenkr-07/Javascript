// Check if an array is sorted.

function isSortedAscend(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
let arr = [1, 0, 5, 0, 3, 2, 0, 0, 6];
console.log(isSortedAscend(arr));

let arr2 = [1,2,3,4,5,6,7];
console.log(isSortedAscend(arr2));