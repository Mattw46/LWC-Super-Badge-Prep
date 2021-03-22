// Traditional Callback

function doSomething(msg, callback){ 
    setTimeout(
      function () {
        console.log(msg);
        callback();
      }, 
      1000);
}
doSomething("1st call", function() {});

  
// Using ES6 Promise
function doSomething(msg){ 
    return new Promise(
      function (resolve, reject) {
        setTimeout(
          function () {
            console.log(msg);
            resolve();
          }, 
          1000);
    }); 
}
      
doSomething("1st Call")
    .then(function() {
      doSomething("2nd Call");
    })
    .then(function() {
      doSomething("3rd Call");
});    
  
// Promise with arrow function
function doSomething(msg){ 
    return new Promise((resolve, reject) => {
        setTimeout(
          () => {
            console.log(msg);
            resolve();
          }, 
          1000);
    }) 
}
      
doSomething("1st Call")
    .then(() => doSomething("2nd Call"))
    .then(() => doSomething("3rd Call"));  
  

// Above with error thrown
function doSomething(msg){ 
    return new Promise((resolve, reject) => {
        setTimeout(
          () => {
            try {
              throw new Error('bad error');
              console.log(msg);
              resolve();
            } catch(e) {
              reject(e);
            }
        }, 
        1000);
    }) 
}
      
doSomething("1st Call")
    .then(() => doSomething("2nd Call"))
    .then(() => doSomething("3rd Call"))
    .catch(err => console.error(err.message));  
  

// Using Await
async function doSomethingManyTimes() {
    try {
      await doSomething("1st Call");
      await doSomething("2nd Call");
      await doSomething("3rd Call");
    } catch (e) {
      console.error(e.message);
    }
}
        
doSomethingManyTimes();  
    