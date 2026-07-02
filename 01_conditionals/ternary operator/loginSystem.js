function loginSystem(username , password){
    let usernameInDatabase = "admin";
    let passwordInDatabase = "12345";
    ((username === usernameInDatabase) && (password === passwordInDatabase)) ? console.log(`Login Successfully`) :console.log(`Incorrect credentials`) ;
}
let uname = "admin";
let upasswrd = "12345";
loginSystem(uname,upasswrd);