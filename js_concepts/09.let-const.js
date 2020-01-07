// let позволяет создавать переменные,
// которые потом можно переассайнить

let a = 'Variable a';
let b = 'Variable b';

{
    // в EC6 это block scope
}

{
    a = 'New Variable A'
    let b = 'Local Variable B' // с let доступны только в рамках блока
    
    console.log('Scope A', a); // => A New Variable A
    console.log('Scope B', b); // => Local Variable B
}

console.log('A: ', a); // => A New Variable A
console.log('B: ', b); // => B Local Variable B

// константы
// с помощью const, но внутри JS всё рано переводит к var

const PORT = 8080;
// PORT = 2000;   // => TypeError: Assignment to constant variable.
// это касается примитивных типов

// а для не примитивов, например массивов

const array = ['JavaScript', 'is', 'awesome'];
array.push('!');
console.log(array); // => [ 'JavaScript', 'is', 'awesome', '!' ]
array[0] = 'JS';
console.log(array); // => [ 'JS', 'is', 'awesome', '!' ]

// таким образом можно изменять состояние массива,
// а вот так уже нельзя: array = []

// для объектов

const obj = {};

obj.name = 'Alexey';
obj.age = '47';

console.log(obj); // => { name: 'Alexey', age: '47' }

// можно менять значение полей объекта

obj.name = 'AlexMorales';

console.log(obj); // => { name: 'AlexMorales', age: '47' }

delete obj.age;

console.log(obj); // => { name: 'AlexMorales' }

// таким образом можно изменять состояние объекта,
// а вот так уже нельзя: obj = {}

// дополнительно почитать:
// https://learn.javascript.ru/variables