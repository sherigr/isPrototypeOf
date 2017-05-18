
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


function isPrototypeOf(proto, obj) {

  var objProto = Object.getPrototypeOf(obj)

  if(objProto === proto) {
    return true;
  } 
  // Object.create(null) does not inherit from Object.prototype
  if(objProto === null || objProto === undefined) {
    return false;
  }
  // Keep looking at obj prototype. If it hits null false should be returned
  while(objProto !== null) { 
    if(proto === objProto) {
      return true;
    } else {      
     objProto = Object.getPrototypeOf(objProto);
    }
  }

  return false;
}


tests({
  'Dog is the prototype of myDog': function() {
  // dog.isPrototypeOf(myDog);   native function => true
  // isPrototypeOf(dog, myDog);  function does the same
  eq(isPrototypeOf(dog, myDog), true);
  },
  'Canine is the prototype of dog': function() {
  // canine.isPrototypeOf(dog) => true
  eq(isPrototypeOf(canine, dog), true);
  },
  'A new object created from the prototype should not be the prototype of the prototye. Therefore, myDog should not be the prototype of dog': function() {
  // myDog.isPrototypeOf(dog) returns false
  eq(isPrototypeOf(myDog, dog), false);
  },
  'Object.create(null) does not inherit from Object.prototype so dog should not be the prototype of empty': function() {
  // dog.isPrototypeOf(empty);  => false
  eq(isPrototypeOf(dog, empty), false);
  },
  'Object.create(null) does not inherit from Object.prototype so canine should not be the prototype of empty': function() {
  eq(isPrototypeOf(canine, empty), false);
  },
  'Passing in Object.prototype as the prototype argument should return true if it is the prototype of the object': function() {
  // Object.prototype.isPrototypeOf(myDog);  => true// your function does the same
  eq(isPrototypeOf(Object.prototype, myDog), true);
  },
  'The function will work for any number of prototype links passed in': function() {
  // Function will work for any number of prototype links.
  eq(isPrototypeOf(canine, myDog), true) // true  
  }    
});





