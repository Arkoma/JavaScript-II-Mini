// A prototype is an object that all other objects can access if they're referenced.

function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
  this.calculateCalories = function() {
    console.log(`Calories in a ${this.name} are ${this.calories * 200}`);
}
}

// Fruit.prototype.calculateCalories = function() {
//     console.log(`Calories in a ${this.name} are ${this.calories * 200}`);
// }

//Banana is a child or sub-class of fruit
function Banana(attrs) {
    Fruit.call(this, attrs);
    this.doMonkeysEat = attrs.doMonkeysEat;
}
function Kiwi(attrs) { Fruit.call(this, attrs)}


Banana.prototype = Object.create(Fruit.prototype);
Kiwi.prototype = Object.create(Fruit.prototype);
Banana.prototype.ripen = function() {
    if(this.isRipe === false) {
        this.isRipe = true;
    }
}


const newBanana = new Banana({
    type: 'tree',
    name: 'Banana',
    isRipe: 'Almost',
    calories: 3,
    doMonkeysEat: true,
});


const newKiwi = new Kiwi({
    type: 'tree',
    name: 'Banana',
    isRipe: false,
    calories: 3,
    isFuzzy: true,
});

console.log(newKiwi);
return newKiwi.calculateCalories();
console.log(newKiwi.calories);