// to test these problems you can run 'node constructors.js' in your terminal

// problem #1
// add a method to Animal's prototype called 'grow'
// when 'grow' is invoked log '<name> grew larger!'

/**
 * Prototype is an SPECIAL Obj that is assigned objects when they are created
 * when we use teh prototype to pass on abilitiies to child objects;
 */

 //psuedoclassical inheritance//
function Animal(options) {
  this.species = options.species;
  this.name = options.name;
}

Animal.prototype.grow = function() {
  console.log(`${this.name} grew larger`);
};


function Dog(dogAttributes) {
  Animal.call(this, dogAttributes);
  this.speak = dogAttributes.speak;
}

Dog.prototype = Object.create(Animal.prototype);

const ozzie = new Dog({
  species: 'Canis dumbass',
  name: 'Ozzie',
  speak: 'woof',
})

console.log(ozzie);
ozzie.grow();
console.log(ozzie);

// add 'grow' to Animal's prototype here

// problem #2
// setup Cat to inherit from Animal
// the Animal constructor needs to be invoked with the 'options' argument
// Cat should have its prototype inherit from Animal
// instances of Cat should also have access to the 'grow' method
  // invoke Animal here with .call
function Cat(catAttributes) {
  Animal.call(this, catAttributes);
}

// connect the prototypes here

Cat.prototype = Object.create(Animal.prototype);

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'Foofie',
});

foofie.grow()

