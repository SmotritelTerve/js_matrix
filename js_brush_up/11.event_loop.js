// Asynchronous JavaScript
// JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.

// When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

// Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed. For example, the JavaScript engine can:

// Request for data from a remote server.
// Display a spinner
// When the data is available, display it on the webpage.
// To do this, the JavaScript engine uses an event loop, which will be covered in the following tutorial.

// Summary
// JavaScript engine uses a call stack to manage execution contexts.
// The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.

// https://www.javascripttutorial.net/javascript-call-stack/
// https://www.javascripttutorial.net/javascript-event-loop/
// https://sandypockets.medium.com/the-call-stack-web-apis-and-event-loop-fcc894905b42
// Микро и макро задачи в JavaScript: https://www.youtube.com/watch?v=SUkauGm52Qs

//Асинхронная операция это операция, требующая ожидания или выполнения какого-то условия.

console.log('Console log 1');

setTimeout(() => console.log('setTimeout 2'), 0);

Promise.resolve('Promise 3').then((data) => console.log(data));

setTimeout(() => {
    setTimeout(() => console.log('setTimeout 4'), 0)

}, 0)
console.log('Console log 5');

// Output:

// Console log 1
// Console log 5
// Promise 3
// setTimeout 2
// setTimeout 4

// В начале исполнения скрипта JS все строки попадают в Call Stack
// и синхронные операции 
// console.log('Console log 1');
// console.log('Console log 5');
// выполняются сразу
// асинхронные операции попадают в Web API
// дальше в Task Queue
// задачи делятся на микрозадачи и макрозадачи, микрозадачи выполняются в первую очередь
// Promise - микрозадача, setTimeout - макрозадачи
// Event Loop выполняет задачи после того как Call Stack выполняется

// Вложенные асинхронные операции выполняются по той же схеме:
//  Call Stack => Web API => Task Queue => Event Loop => Call Stack
