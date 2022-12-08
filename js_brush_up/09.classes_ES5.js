
function Animal2(type){
    this.type = type;
}

Animal2.prototype.run = function(){
    return 'RUN';
}

function Person2 (name, age){
    this.name = name;
    this.age = age;
}

// how to declare static fiel and method
Person2.region = 'ASIA';
Person2.help = function(){
    console.log('help');
}



Person2.prototype = Object.create(Animal2.prototype);
Person2.prototype.constructor = Person2

Person2.prototype.print = function(){
    return `${this.name} ${this.age};`
}

Object.defineProperty(Person2.prototype, 'card', {
    configurable:false,
    writable: false,
    enumerable: false,
    // value: {} = console.log(1),
    value: '111111',
    // we can also declare getters and setters
//    get(){

//    },
//    set(){

//    }

})

// not arrow functions! because arrow functions use upper context (this)

const alex2 = new Person2('Alex2', 50);

// all objects have prototypes

console.log(alex2.__proto__ == Person2.prototype);

const number = 11;
// number is primitive, but we can call a method
console.log(number.toString());
//method toString() is from Number
console.log(number.__proto__);

console.log(number.__proto__ == Number.prototype);

// can create instance
const alex3 = new Person2('Alex3', 35);

console.log(Person2.region);
console.log(alex3.print());
console.log(alex3.run());

console.log(Object.getOwnPropertyDescriptors(alex3))

//in JS classes are syntax sugar upon functions

// The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) 
// that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.

