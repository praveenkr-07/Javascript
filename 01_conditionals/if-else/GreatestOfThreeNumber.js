function greatestNumber(a , b ,c){
    if(a> b && a > c) console.log(`${a} is greatest among ${a} , ${b} and ${c}.`);
    else if(b> a && b > c) console.log(`${b} is greatest among ${a} , ${b} and ${c}.`);
    else if(c> a && c > b)console.log(`${c} is greatest among ${a} , ${b} and ${c}.`);
    else console.log(`${a} , ${b} and ${c} all are equal.`);
}

greatestNumber(1,2,3);
greatestNumber(3,2,9);
greatestNumber(1,0,-1);
greatestNumber(1,1,1);