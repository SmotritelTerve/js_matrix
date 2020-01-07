// замыкание - это момент, когда функция имеет доступ до переменных из вышестоящего скоупа
// т.е. когда функция замыкает в себе определенные значения из вышестоящего скоупа

function sayHelloTo(name){
    const message = 'Hello ' + name;
    
    return function(){        // эта анонимная функция имеет доступ к переменным из вышестоящего скоупа
        console.log(message);
    }
}

const helloToElena = sayHelloTo('Elena');
console.log(helloToElena); // => [Function]
console.log(helloToElena()); // => Hello Elena и undefined
// получили еще и undefined, потому что helloToElena ничего не возвращает,
// а значит по умолчанию возвращает undefined
helloToElena(); // => Hello Elena

const helloToIgor = sayHelloTo('Igor');
helloToIgor(); // => Hello Igor

// какое практическое применение у замыканий?

function createFrameworkManager(){
    const fw = ['Angular', 'React'];

    return {
        print: function(){
            console.log(fw.join(' '));
        },
        add: function(framework){
            fw.push(framework);
        }
    }

}

const manager = createFrameworkManager();
console.log(manager); // => { print: [Function: print], add: [Function: add] }
// console.log(fw); // => ReferenceError: fw is not defined

manager.print(); // => Angular React

manager.add('VueJS');

manager.print(); // => Angular React VueJS

// т.е. fw не доступна извне, 
// тем не менее с этой переменной fw работать можно
// она как бы является приватной переменной
// функции её замкнули

// следующий классический пример с таймаутом

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++ ){
    // нам нужно через определенную задержку вывести все числа фибоначи
    setTimeout(function(){
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500);
}

// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined

// как починить?
// например, поменять на let, чтобы переменная сущестовала внутри блочного скоупа

for (let i = 0; i < fib.length; i++ ){
    setTimeout(function(){
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500);
}

// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 8
// fib[5] = 13

// но если не можем использовать let из ES6 , то на помощь приходят замыкания

for (var i = 0; i < fib.length; i++ ){
    (function(j){
        setTimeout(function(){
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500);
    })(i) // Immediately-invoked Function Expression
}

// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 8
// fib[5] = 13