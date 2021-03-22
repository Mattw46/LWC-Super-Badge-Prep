// previously need to check if parameter supplied
function helloMessage (param1, param2) {
    param2 = param2 || 'World';
    return param1 + ' ' + param2;
  }
  console.log(helloMessage('Hello'));  //Displays "Hello World"  
  
// ES6 allows default values to be provided on optional fields
function helloMessage (param1, param2 = 'World') {
    return param1 + ' ' + param2;
  }
  console.log(helloMessage('Hello'));  //Displays "Hello World"  
  
// for unknown number of parameters
function showContact (firstName, lastName, ...titles)  {
    console.log(firstName + ' ' + lastName + ', ' + titles[0] + ' and ' + titles[1]);
  }
  showContact('Sue', 'Johnson', 'Developer', 'Architect');  

// prints one, two, three, four
let array1 = ['one', 'two'];
let array2 = ['three', 'four'];
array1.push(...array2);
console.log(...array1);  
