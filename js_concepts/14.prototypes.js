// prototype используется в двух разных контекстах:
// ПЕРВЫЙ
// прежде всего надо понимать,
// что каждый объект имеет свой прототип который берется из родительского элемента, от которого был создан данный объект
// для того чтобы получить этот родительский прототип сейчас используется ключевое слово
// __proto__
// в JS любое наследование - прототипированное наследование
//  __proto__   => ES6
//  Object.getPrototypeOf()  => ES5
// ВТОРОЙ
// свойство prototype у функций, которое по сути служит для того, чтобы
// передавать эти свойства для объектов, которые создаются допустим через ключевое слово new

// ES5:
function Cat(name, color){
    this.name = name;
    this.color = color;
}

// раз класс Cat функция, значит у него есть метод prototype
Cat.prototype.voice = function(){      // ключевое слово function создает свой контекст
    console.log(`Cat ${this.name} says MEW`);
}

const cat = new Cat ('Felix', 'black&white');

// теперь нам доступны

cat.name;
cat.color;

// и самое важное в теме

cat.voice();  // => Cat Felix says MEW

// посмотрим что такое prototype у Cat

console.log(Cat.prototype); // => Cat { voice: [Function] }

// если посмотрим инстанс этого класса, то в нем будут только поля

console.log(cat); // => Cat { name: 'Felix', color: 'black&white' }

// но тем не менее имеем в прототипе данного объекта метод voice и соответственно
// вызывая в контексте объекта cat метод voice он не находит его в самом объекте
// и поднимаясь выше находит его в прототипе класса

console.log(cat.__proto__); // => Cat { voice: [Function] }

// можем сравнить, это одно и то же

console.log(cat.__proto__ === Cat.prototype); // => true

// еще в консоле можно посмотреть на конструктор

console.log(cat.constructor); // => [Function: Cat]

// ===============================

function Person(){};
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Alex';

// можно сделать несколько проверок, которые показывают нам как работает цепочка прототипов
// оператор in проверяет есть ли такое свойство в объекте или прототипе

console.log('skin' in person); // => true
console.log(person.legs);  // => 2, потому что это свойство доступно в прототипе данного объекта
console.log(person.eyes); // => undefined, потому что такой переменной нет
// как определить, какие свойства есть в прототипе, а какие собственные?
console.log(person.toString()); // [object Object]
// но более интересно:
console.log(person.hasOwnProperty('name')); // => true
console.log(person.hasOwnProperty('skin')); // => false

// Object.create() позволяет создавать объекты используя существующий прототип
// const myProto = {year: 2019};
let myProto = {year: 2019};
const myYear = Object.create(myProto);

// теперь у объекта myYear присутсствует свойство year
console.log(myYear.year); // => 2019
console.log(myYear.hasOwnProperty('year')); // => false

console.log(myYear.__proto__ === myProto); // => true

// если изменим поле у прототипа
myProto.year = 2022;
console.log(myYear.year); // => 2022

// если целиком меняем объект

myProto = {myYear: 999};

console.log(myYear.year); // => 2022
