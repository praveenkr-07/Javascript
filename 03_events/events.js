// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Hello Praveen !";
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Hello Praveen ! Sarrrr";
// }

// const element = document.getElementById("first");
// element.addEventListener("dblclick",()=>{
//      element.textContent = "Hello Praveen ! Sarrrr";
// })

// element.addEventListener("mouseenter",()=>{
//      element.style.backgroundColor="pink";
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener("dblclick", () => {
//   child1.textContent = "Hello Praveen ! Sarrrr";
// });

// const parent = document.getElementById("parent");
// // parent.addEventListener("dblclick",() =>{
// //     parent.children[0].textContent = "Hello Praveen ! Sarrrr";
// //     })


// for(let child of parent.children){
//     child.addEventListener("dblclick",() =>{
//     child.textContent = "Hello Praveen ! Sarrrr";
//      })
// }

const grandparent = document.getElementById("grandparent"); 
grandparent.addEventListener("click",(e)=>{
    console.log(e);
    console.log("GrandParent is Clicked !"); 
})

const parent = document.getElementById("parent"); 
parent.addEventListener("click",()=>{
    console.log("Parent is Clicked !"); 
})

const child = document.getElementById("child"); 
child.addEventListener("click",()=>{
    console.log("child is Clicked !"); 
})