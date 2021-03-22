// Classes in ES5 and below
function Animal(name) {
    this.name = name;
}
        
Animal.prototype.printName = function() {
    console.log(this.name);
}

let duck = new Animal('duck');
duck.printName();  // Displays "duck"  


// ES6 way
class Animal {
    constructor(name) {
      this.name = name;
    }
      
    printName() {
      console.log(this.name);
    }
}  