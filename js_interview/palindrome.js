const strPolindrome = 'testtest';
const strNotPolindrome = 'abccba';

function isPalindrome1(strArg) {
    const lowerStr = strArg.toLowerCase();

    return lowerStr === strArg
        .toLowerCase()
        .split('')
        .reduceRight((acc, item) => {
            acc = acc + item;
            return acc;
        }, '')
}

// acc - accumulator
// split() method splits a string into substrings using the specified separator and return them as an array.
// reduceRight() method executes a reducer function for each array element,
// works from right to left, returns a single value: the function's accumulated result.

console.log(isPalindrome1(strPolindrome));
console.log(isPalindrome1(strNotPolindrome));

function isPalindrome2(strArg) {
    const lowerStr = strArg.toLowerCase();
    let strToAssert = '';

    for (let i = lowerStr.length - 1; i >= 0; i--) {
        strToAssert = strToAssert + lowerStr[i];
    }
    return lowerStr === strToAssert;
}

// String is not in array, but similar, for example String has field length
// i >= 0 because arrays have zero index

console.log(isPalindrome2(strPolindrome));
console.log(isPalindrome2(strNotPolindrome));

function isPalindrome3(strArg) {
    const lowerStr = strArg.toLowerCase();
    const arr = strArg.split('');
    const reversed = [];

    for (let i = lowerStr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return lowerStr === reversed.join('');
}

// push() method adds one or more elements to the end of an array and returns the new length of the array
// join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
// separated by commas or a specified separator string.

console.log(isPalindrome3(strPolindrome));
console.log(isPalindrome3(strNotPolindrome));