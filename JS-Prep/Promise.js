let promise = new Promise(function(resolve, reject) {
	setTimeout(() => resolve("success"), 1000);
});

promise.then(
	result => alert(result + " worked"), // alert when resolved
  error => alert(error + " error") // run if error
);

let passfail = false;

promise = new Promise(function(resolve, reject) {
	if (passfail) {
  	setTimeout(() => resolve("success"), 1000);
  }
  else {
  	setTimeout(() => reject("failed"), 1000);
  }
  
});

promise.then(
	result => alert(result + " worked"), // alert when resolved
  error => alert(error + " error") // run if error
);