/**
 * Testing with Jasmine
 * 
 * install from npm:
 * npm install --save-dev jasmine
 */

// basic syntax
describe("A test suite is just a function", function() {
    it("This is a positive test", function() {
      expect(true).toBe(true);
    });
    it("This is a negative test", function() {
      expect(false).not.toBe(true);
    });
});  

// Full example:
class Parent {
    constructor(name) {
      this.name = name;
    }
         
    getName() {
      return this.name;
    }
}
  
class Child extends Parent {
    constructor(name) {
      super(name);
    }
          
    getMessage() {
      return 'Hello ' + super.getName();
    }
}   

describe("Test Parent Child Classes", function() {
    it("Get Message Test", function(){
        let someone = new Child('person');
        expect(someone.getMessage()).toEqual("Hello person");
    });
       
});  
  
  
// Using inside HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Jasmine files to load -->
    <link rel="shortcut icon" type="image/png" href="lib/jasmine-3.2.1/jasmine_favicon.png">
    <link rel="stylesheet" href="lib/jasmine-3.2.1/jasmine.css">
    <script src="lib/jasmine-3.2.1/jasmine.js"></script>
    <script src="lib/jasmine-3.2.1/jasmine-html.js"></script>
    <script src="lib/jasmine-3.2.1/boot.js"></script>
    
    <!-- JS Files to Test -->
    <script src="Parent.js"> </script>
    <script src="Child.js"> </script>
    
    <!-- Jasmine Test Suite -->
    <script src="JasmineTest.js"> </script>
    
</head>
<body>
    <h1> Jasmine Parent Child Testing Demo </h1>
</body>
</html>    
