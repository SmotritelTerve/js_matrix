const scores = [12, 13, 14, 15, 16];

//create new array with even numbers of scores and multiply each value with 3

let mappedArray = scores.map(score => score * 3);

console.log("mapped array = " + mappedArray);

const scores2 = [12, 13, 14, 15, 16];

//create new array with even numbers of scores and multiply each value with 3 and sum them

let sumValue = scores2.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0);

console.log(sumValue);
