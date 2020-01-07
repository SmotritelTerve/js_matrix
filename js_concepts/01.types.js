// there 7 types in JS
// 6 primitives: null, underfined, boolean, number, string, symbol (ECMA6)
// 1 non-primitive:  object

console.log(typeof(0));
console.log(typeof 10);
console.log(typeof true);
console.log(typeof 'JavaScript'); // '', "", ``
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof Math);
console.log(typeof Date); // => function
console.log(typeof Symbol('JS'));
console.log(typeof null); // => object - incorrect, because type of null is null
console.log(typeof function() {}); // => function - incorrect, because type of function is object
console.log(typeof NaN); // => number, but NaN == Not a Number
console.log(typeof (1/0)); // => number
// console.log(1/0); // => Infinity
// console.log(undefined * 1); // => NaN

// underfined - when the variable is undefined, or defined with var, but withaut value
// functions that don't return, by default return underfined
// null - a variable contains null