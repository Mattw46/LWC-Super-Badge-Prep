/* 
    Weird this quirk 
   assign this to self for the function to see hello variable
*/

let message = {
    hello : 'Hello',
    names : ['Sue', 'Joe'],
    showMessage: function() {
      let self = this;
      this.names.forEach(function(name) {
        console.log(self.hello + ' ' + name);
      });
    }
  }
  message.showMessage();  
  

  // ES6 has lexical scope built in:
  let message = {
    hello : 'Hello',
    names : ['Sue', 'Joe'],
    showMessage: function() {
      this.names.forEach(name => {
        console.log(this.hello + ' ' + name);
      });
    }
  }
  message.showMessage()  
  