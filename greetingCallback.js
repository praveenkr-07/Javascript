nextMessage = () => console.log("Let's Study Javascript !");

greetUser = (str,callback) => {
    console.log(`Hello ${str}`);
    callback();
}

greetUser ("Praveen",nextMessage);

