const scores = [12, 13, 14, 15, 16];

//create new array with even numbers of scores array

let evenScores = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i]);
    }
}

console.log(evenScores);

// filter
// https://www.w3schools.com/jsref/jsref_filter.asp

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// array.filter(function(currentValue, index, arr), thisValue)

// function()	Required.
// A function to run for each array element.
// currentValue	Required.
// The value of the current element.
// index	Optional.
// The index of the current element.
// arr	Optional.
// The array of the current element.
// thisValue	Optional. Default undefined
// A value passed to the function as its this value.

// Returned value
// Containing the elements that pass the test.
// If no elements pass the test it returns an empty array.

let filteredEvenScores = scores.filter(score => score % 2 == 0);

console.log(filteredEvenScores);
