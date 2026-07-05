let arr = [1,40,2,3,4,21,45,98,201]

// forEach loop
arr.forEach(number => console.log(number))

// print elements greater than 10
arr.filtering = function(compare){
    const newArr = [];
    for(let num of arr) {
        if(compare(num)){
            newArr.push(num); 
        }
    } 
    return newArr;                                                 
}
let newArr = arr.filtering((number) => number > 10 );
console.log(newArr);
