// function greet(){
//     console.log("Hello Sir");
// }

// function middleman(){
//     console.log("i'm Middle man.");
// }
// function meet(callback){
//     console.log("meet function is started here. ");
//     callback();
//     console.log("meet function is in middle here. ");
//     callback();
//     console.log("meet function is in ended here. ");
// }
// meet(greet);
// meet(middleman);

// // callback function prevents hardcode => make things reusable 



//  function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const c1 = counter();
// const c2 = counter();

// c1();
// c1();

// c2();

// c1();

function outer() {
    let x = 5;
    return () => console.log(x);
}

const fn = outer();
fn();