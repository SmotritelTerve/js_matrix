// контекст и scope ни одно и то же
// scope по сути указывает на видимость определенных переменных
// контекст определяет как функция была вызвана
// и он постоянно указывает на ключевое слово this

const person = {
    surname: 'Stark',
    knows: function(what, name){
        console.log(`You ${what} know, ${name} ${this.surname}`);
    }
}

person.knows('all', 'Brun');   // => You all know, Brun Stark

const john = {surname: 'Snow'};

person.knows.call(john, 'nothing', 'John');  // => You nothing know, John Snow

// отличие apply от call в том, что у него всего два параметра
// второй параметр всегда массив c аргументами, которые нужны для функции

person.knows.apply(john, ['nothing', 'John']); // => You nothing know, John Snow

// можно использовать возможности ES6, спрэд оператор

person.knows.call(john, ...['nothing', 'John']); // => You nothing know, John Snow

// bind отличается от call и apply тем, что он не сразу вызывaет функцию
// в случае bind возвращается функция
const bound = person.knows.bind(john, 'nothing', 'John');

bound(); // => You nothing know, John Snow

// но можем вызвать и немедленно

person.knows.bind(john, 'nothing', 'John')(); // => You nothing know, John Snow

// ========

// в ES5 могли создавать классы через ключевое слово function

function Person(name, age){
    this.name = name;
    this.age = age;

    console.log(this);
}

// создаем инстант этого класса

const elena = new Person ('Elena' , 35); // => Person { name: 'Elena', age: 35 }

// существуют такие binding
// существует явный binding - explicit binding
// когда мы явно указываем с каким контекстом вызывать функцию

function logThis() {
    console.log(this)
}

const obj1 = {num: 42};

logThis.apply(obj1);  // => { num: 42 }
logThis.call(obj1);   // => { num: 42 }
logThis.bind(obj1)(); // => { num: 42 }

// implicit binding

const animal = {
    legs: 4,
    logThis: function() {
        console.log(this);
    }
}

animal.logThis(); // => { legs: 4, logThis: [Function: logThis] }

// как работают стрелочные функции
// если используем function то создается контекст

function Cat(color){
    this.color = color;
    console.log('This', this);
    (()=> console.log('Arrow this ', this))();
}

new Cat('red');
// =>
// This Cat { color: 'red' }
// Arrow this  Cat { color: 'red' }

// потому что стрелочные функции не создают свой контекст
// это одно из преимуществ помимо лучшего синтаксиса