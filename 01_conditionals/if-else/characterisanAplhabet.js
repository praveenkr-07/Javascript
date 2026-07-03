
function isAlphabet(char){
    let i = char.charCodeAt(); 
    if(i>= 97 && i<=122 || i>=65 && i<=90) console.log(`${char} is an alphabet`);
    else console.log(`${char} is not an alphabet`);
}

let character = '%';
isAlphabet(character);
