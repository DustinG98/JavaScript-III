/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name){
	console.log(this);
	return name;
}

// Principle 2

// code example for Implicit Binding

const myObj = {
	greeting: 'Hello',
	sayHello: function(name) {
		console.log(`${this.greeting} my name is ${name}`);
		console.log(this);
	}
};
myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
	this.greeting = 'Hello';
	this.greeter = greeter;
	this.speak = function() {
		console.log(this.greeing + this.greeter);
		console.log(this);
	};
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman);
newman.speak.apply(jerry);

newman.speak();
jerry.speak();