// Array - collection of elements

let marks = Array(5);

// Arrays are objects

let marks2 = new Array(20, 40, 60, 80, 70);

let marks3 = (20, 30, 40, 49, 50);

// access elements of array by index

console.log(marks2[3]); //80

marks2[3] = 777;

console.log(marks2);

//property length  (not a method !)
console.log(marks2.length);

//end

marks2.push(888);
marks2.pop();

//beginning

marks2.unshift(111);
marks2.shift(111);

/////
let fruits = ['banana', 'mango', 'apple', 'cherry', "plum"];

console.log(fruits.indexOf('apple'));

console.log(fruits.includes('apple'));
console.log(fruits.includes('rasberry'));

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

const subArray = fruits.slice(1, 2);
console.log(subArray); //[ 'mango' ]

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// array.splice(index, howmany, item1, ....., itemX)
// index	Required.
// The position to add/remove items.
// Negative value defines the position from the end of the array.
// howmany	Optional.
// Number of items to be removed.
// item1, ..., itemX	Optional.
// New elements(s) to be added.

console.log(fruits); //[ 'banana', 'mango', 'apple', 'cherry', 'plum' ]

const subArray_2 = fruits.splice(1, 2);
console.log(fruits); //[ 'banana', 'cherry', 'plum' ]
console.log(subArray_2); //[ 'mango', 'apple' ]
