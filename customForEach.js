Array.prototype.myForEach = function(callback){
    for(const num  of this){
        callback(num);
    }
}
const arr = [1,2,3,4,5];
arr.myForEach((num)=> console.log(num));

