function sum(a, b){
    return a + b;
}

console.log(sum(1, 41)); // => 42

// в JS можно вызвать функцию перед тем как её определили

console.log(sum2(1, 41)); // => 42

function sum2(a, b){
    return a + b;
}

// далее, underfined, но не ошибка
console.log(i); // => undefined
var i = 42;
console.log(i);
// тот же самый результат
var i1;
console.log(i1); // => undefined
var i1 = 42;
console.log(i1)

// есть разница при использовании ключевых слов var и const
// переменные, определенные с помощью let и const не подлежат хоистингу

// console.log(num); // => ReferenceError: num is not defined
const num = 42;
console.log(num);
