Except primitives everything in js is objects.objects are kings here.
1. concept1:
objects are non mutable
```
var hom = 23; // object hom has 1 value
var hom = [a,b,c]; // object hom has multiple values
var hom ={1,4,function(){...}}// values & property
```
2. concept 2 
in browser root object is windows. everything comes under this window object.
```
var sam = 23;
console.log(window.sam); // window.sam = sam
```
But in node google v8 environment, global object is different not the window.

3. concept 3
Heirarcy may be like this.
Object == Object.Prototype
windows , methods and properties
Date,Array are inherited from Array.Prototype,etc
if we want to add methods or value to object, can use prototype
All JavaScript objects inherit properties and methods from a prototype.

Date objects inherit from Date.prototype. Array objects inherit from Array.prototype. Person objects inherit from Person.prototype.

The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.
```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
```
4. concept4
With apply(),call(), you can use a method belonging to another object.
```
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.call(myObject);  // Will return "Mary Doe"

realtime eg:
Math.max.apply(null,[1,2,3]); // Will also return 3
``` 
In JavaScript strict mode, the first argument becomes the value of this in the invoked function, even if the argument is not an object.

In "non-strict" mode, if the value of the first argument is null or undefined, it is replaced with the global object.

4. concept
DOM is object representation of browser tree. 
The HTML DOM is a standard object model and programming interface for HTML. It defines:

The HTML elements as objects
The properties of all HTML elements
The methods to access all HTML elements
The events for all HTML elements

5. callback
concept is that we can give function as a parameter. 
used widely in all libs
eg:
```
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
The example below has no callback parameter, and the alert box will be displayed before the hide effect is completed:
$("button").click(function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
});
```
6. promises 
if success do this else other stuff - this can be achieved using promise object

```
```

7. asyncronous native js
2 ways:
xmlhttpobject - regular way
Fetch API - uses promises object inside(IE not supported fetch)




ES5 & ES6
1. modules
Each module can be authored individually, which increases team scalability.
Each module can be debugged independently, which decreases testing costs.
Each module's scope and context can be controlled, which can be used to isolate the modules.

Many developers view CommonJS as a very clean authoring format for modules. However, browsers can't consume them directly because browsers don't create the CommonJS scoped variables. Performance also suffers dramatically when browsers must load dozens or hundreds of modules in any non-trivial application. You resolve this problem by using tools that generate transport formats to allow CommonJS modules to be concatenated and wrapped so they can operate in browsers. Many of these tools just use AMD for the transport format since it does the job efficiently and is so widely supported.

es5:
to make codes modular like - commonjs, AMD are used in 
```
```

es6: modules
default they provided modular concept 
```
```

2. classes and objects
es5:
we have been creating class objects and used prototype widely in es5. way of writing is changedd in es6.
```
```
es6:
now modularity is built-in in es6 so we can write classes in seperately and import / export them.
```
```

### common methods
apply/call method  - apply usually work on array
apply used to call differetn object methods
eg: Math.max.apply(null,numArr)

map method: Array
//*****The map() method creates a new array with the results of calling a provided function on every element
 in the calling array.
 ```
      var arrdigits = digits.map(x=>parseInt(x));
 ```

 reduce(): array 
  reduce() method reduces the array to a single value.
//The return value of the function is stored in an accumulator (result/total).
// var numbers = [65, 44, 12, 4];
//numbers.reduce((total,num)=>total+num));

filter() : array
//The filter() method creates a new array with all elements 
that pass the test implemented by the provided function.
```
//common elements
let intersection = arr1.filter(x => arr2.includes(x));
console.log(intersection);
//arr1 alone
let difference = arr1.filter(x => !arr2.includes(x));
//not include commons
let symdiff = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));
```

# code snippet useful
1. arrays to object****** 
very use(https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7)
```
const peopleArray = [
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ];

//   const arrayToObject = (array) =>
//    array.reduce((obj, item) => {
//      obj[item.id] = item
//      return obj
//    }, {});
//    const idToSelect = "789";
// const peopleObject = arrayToObject(peopleArray);
// console.log(peopleObject);
// console.log(peopleObject[idToSelect]);

const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {});
const peopleObject = arrayToObject(peopleArray, "id");
const idToSelect = "789";
console.log(peopleObject);
console.log(peopleObject[idToSelect]);
```
