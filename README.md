# isPrototypeOf

Write a function, isPrototypeOf, that works just like `Object.prototype.isPrototypeOf`. Don't use `Object.prototype.isPrototypeOf` in solution.

```javascript
var canine = {
  bark: function() {
    console.log('bark');
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);
var empty = Object.create(null);

dog.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(dog, myDog); // function does the same

dog.isPrototypeOf(empty);  // native function returns false
isPrototypeOf(dog, empty); // function does the same

Object.prototype.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(Object.prototype, myDog); // function does the same

// Function will work for any number of prototype links.
isPrototypeOf(canine, myDog) // true
```
