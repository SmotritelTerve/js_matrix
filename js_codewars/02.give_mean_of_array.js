/*
Return the average of the given array rounded down (округленное вниз) to its nearest integer.
(for example, to calculate average of school report)
The array will never be empty.
*/

/*
https://learn.javascript.info/number
Rounding
One of the most used operations when working with numbers is rounding.
There are several built-in functions for rounding:
Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
*/

function getAverage(marks) {
    // 1 solution
    // return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);

    // 2 solution
    let acc = 0;
    marks.forEach(el => acc += el);
    return Math.floor(acc / marks.length);
}

