class Parent {
    constructor() {

    }   
    parentMethod() {
        console.log(this.b)
    }
}


class SomeClass extends Parent {
    constructor() {
        super();
        this.a = 10;
        this.b = 12;
    }
    method1() {
        console.log(this.a);
    }
}

// ES6 class is just syntax sugar

function ES5Parent() {

}

ESSomeClass.prototype = Object.create(ES5Parent.prototype);
ESSomeClass.prototype.constructor = ESSomeClass();

ES5Parent.prototype.parentMethod = function() {
    console.log(this.b)
}

function ESSomeClass() {
    // immitation of call super, transfer the current context
    ES5Parent.call(this);
    //
    this.a = 10;
    this.b = 12;
}

ESSomeClass.prototype.method1 = function() {
    console.log(this.a);
}

const es6SomeClass = new SomeClass();
const es5SomeClass = new ESSomeClass();

es6SomeClass.method1();
es6SomeClass.parentMethod();
console.log('______________es5')
es5SomeClass.method1();
es5SomeClass.parentMethod();