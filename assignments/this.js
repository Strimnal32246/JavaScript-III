/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global -  global scope is refering to the window object.
 * 2. Implict -  left of the dot
 * 3. New binding -is refering to an object created by a function.
 * 4. Explict binding - whenever.cal(), .apply(), is applied it hijacks
 *
 * write out a code example of each explanation above
 */

// Principle 1
// Window Binding
function yellName(susan) {
    console.log(this);
    return susan
}
// code example for Window Binding
console.log(yellName('SusanTrimnal!!!'))
// Principle 2
const me = {
    name: 'susan',
    class: 'web22',
    sayName: function () {
        console.log(this.name);
    }
}
me.sayName();
// code example for Implicit Binding

// Principle 3
function Cat(name, breed) {
    this.name = name,
        this.breed = breed
};


const Simba = new Cat("Simba", "Tabby")
console.log(Simba) // Cat {name: 'Simba', breed: 'Tabby’ }


const Oreo = new Cat("Oreo", "Mixed")
console.log(Oreo) // Cat {name: 'Oreo', breed: 'Mixed'}

// code example for New Binding

// Principle 4
const pizza1 = {
    'storeName': 'Hungry Howies'
}

const pick = ['Pepperoni', 'Supreme', 'Cheese'];

function order(pick1, pick2, pick3) {
    console.log(`Hello ${this.storeName}, I want to order ${pick1}, ${pick2} and ${pick3} pizza.`);
}

order.apply(pizza1, pick);
// code example for Explicit Binding