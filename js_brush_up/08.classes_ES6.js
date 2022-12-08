class Animal {
    constructor(type){
        this.type = type
    }
    run(direction){
        return `RUN ${direction}`
    }
}

class Person extends Animal {
    //incapsulation
    static region = 'ASIA';
    //private field
    #card = '0000 111';

    get cardNumber() {
        return this.#card.split(' ')[0];
    }
    set cardNumber(value) {
        this.#card = value;
    }
    constructor(name, age){
        //call parents's constructor
        super('human');
        this.name = name;
        this.age = age;
    }

    print(){
        return `${this.name} ${this.age}`
    }

    runDirection(direction){
        //polymorphism
        //some logic
        return super.run(direction);
    }

    static help() {
        console.log('help func', this);
    }
}

// create instance of the class
const alex = new Person('Alex', '50');

console.log(alex.runDirection('Home'));
console.log(alex.runDirection('Office'));
console.log(alex);
console.log(alex.cardNumber);
alex.cardNumber = '7777' ;
console.log(alex.cardNumber);

// The static keyword defines a static method or property for a class,
// or a static initialization block.
// Neither static methods nor static properties can be called on instances of the class. 
// Instead, they're called on the class itself.

// Static methods are often utility functions, such as functions to create or clone objects,
// whereas static properties are useful for caches, fixed-configuration, 
// or any other data you don't need to be replicated across instances.

console.log(Person.region);
console.log(Person.help());