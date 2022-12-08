//reduce filter map

const numbers = [10, 39, 72, 50, 51];

let sum = 0;

//pay attention to initializing let i = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("sum = " + sum);

//// reduce

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// At the first callback, there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// function()	Required.
// A function to be run for each element in the array.
// Reducer function parameters:
// total	Required.
// The initialValue, or the previously returned value of the function.
// currentValue	Required.
// The value of the current element.
// currentIndex	Optional.
// The index of the current element.
// arr	Optional.
// The array the current element belongs to.
// initialValue	Optional.
// A value to be passed to the function as the initial value.

// The accumulated result from the last call of the callback function.

let total = numbers.reduce((sum, number) => sum + number, 0);

console.log("total = " + total);