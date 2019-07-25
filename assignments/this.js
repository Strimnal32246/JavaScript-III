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

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding