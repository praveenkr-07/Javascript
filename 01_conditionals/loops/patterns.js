// pattern printing 
// *****
// *****
// *****
// *****
// *****

function Pattern1(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
        let str = "";
        for(let cols = 1 ;cols<=j ;cols++){
        str += "*";
    }
    console.log(str);
    }
    return;
}
//Pattern1(3,4);

// 1
// 12
// 123
// 1234
// 12345
function Pattern2(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
        let str = "";
        for(let cols = 1 ;cols<=rows ;cols++){
        str += cols;
    }
    console.log(str);
    }
    return;
}
//Pattern2(5,5);


// *****
// ****
// ***
// **
// *

function Pattern3(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
        let str = "";
        for(let cols = j-rows+1 ;cols>=1 ;cols--){
        str += "*";
    }
    console.log(str);
    }
    return;
}
// Pattern3(5,5);


//     *
//    ***
//   *****
//  *******
// *********
function Pattern4(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
        let str = "";
        for(let space = 1 ;space <= i-rows ;space++) str += " ";
        for(let cols1 = 1 ;cols1<=rows ;cols1++) str += "*";
        for(let cols2 = 1 ;cols2<rows ;cols2++)str += "*";
        console.log(str);
    }
    return;
}
//Pattern4(5,5);



// 1
// 22
// 333
// 4444
// 55555
function Pattern5(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
        let str = "";
        for(let cols = 1 ; cols<=rows ;cols++) str += rows;
        console.log(str);
    }
    return;
}
//Pattern5(5,5);


// A
// AB
// ABC
// ABCD
// ABCDE
function Pattern6(i,j){
    for(let rows = 1 ;rows<= i ;rows++){
        let str = "";
        for(let cols = 65 ; cols<rows+65 ;cols++) str += String.fromCharCode(cols);
        console.log(str);
    }
    return;
}
//Pattern6(5,5);

// *****
// *   *
// *   *
// *   *
// *****
function Pattern7(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
    let str = "";
    if(rows === 1 || rows === i){
        for(let cols = 1 ;cols<=j ;cols++){
            str += "*";
        }
    }
    else{
        for(let cols = 1 ;cols<=j ;cols++){
            if(cols==1 || cols == j) str += "*";
            else str += " ";
        }
    }
    console.log(str);
    }
}
//Pattern7(5,5);



// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
function Pattern8(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
    let str = "";
    for(let cols = 1 ; cols<=rows;cols++) str += "*";
    console.log(str);
    }

    for(let rows = i-1 ;rows>=0 ;rows--){
    let str = "";
    for(let cols = 1 ; cols<=rows;cols++) str += "*";
    console.log(str);
    }
}
//Pattern8(5,5);


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function Pattern9(i,j){
    for(let rows = 1 ;rows<=i ;rows++){
        let str = "";
        for(let space = 1 ;space <= i-rows ;space++) str += " ";
        for(let cols1 = 1 ;cols1<=rows ;cols1++) str += "*";
        for(let cols2 = 1 ;cols2<rows ;cols2++)str += "*";
        console.log(str);
    }

    for(let rows = i-1 ;rows>=0 ;rows--){
        let str = "";
        for(let space = 1 ;space <= i-rows ;space++) str += " ";
        for(let cols1 = 1 ;cols1<=rows ;cols1++) str += "*";
        for(let cols2 = 1 ;cols2<rows ;cols2++)str += "*";
        console.log(str);
    }
}
Pattern9(5,5);