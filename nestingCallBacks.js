// Getting User...

// ↓

// Getting Posts...

// ↓

// Getting Comments...

// ↓

// Completed

function getData(data, getNextData) {
  setTimeout(() => {
    if (getNextData) console.log(`Getting ${data}...`);
    else console.log(`${data}...`);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

getData("user", () => {
  getData("posts" , ()=>{
    getData("comments" , ()=> {
        getData("completed");
    });
  });
});
