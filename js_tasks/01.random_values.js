// Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values. 

// Materials:
// https://www.w3schools.com/js/js_functions.asp
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/js/js_random.asp



// let user = {
//     name: "Igor",
//     age: 25,
//     isSmoker: true,
// }

// for (let key in user){
//     console.log(key);
// }

// for(let key in user){
//     console.log(user[key]);
// }

let fruits = ["apple", "banana", "mango", 1];

console.log(fruits);

for(let fruit of fruits){
    console.log(fruit)
}

fruits.forEach(function(item, index){
    console.log(item, index)
})

fruits.forEach(function (item){
    console.log(item)
})

fruits.forEach((item, index) => console.log(item, index))

fruits.forEach((item) => console.log(item))

function printPretty(item, index){
    console.log(`${index} - ${item}`)
}

fruits.forEach(printPretty);

let fiveLettersFirst = fruits.find(item => item.length <=5);

console.log("the first found item : " + fiveLettersFirst);

let fiveLettersAll = fruits.filter(item => item.length <=5);

console.log("all found items : " + fiveLettersAll);

console.log("array : " + fruits);

let mappedFruits = fruits.map(item => item.length);

console.log("mapped array : " + mappedFruits);

console.log("array : " + fruits);

let myArr = [1,2,3,4,5];

let result = myArr.reduce((sum, current) => sum + current, 0);

console.log("summed array : " + result);

function outer(){
    let x = "Sveta";
    function sayIt(name){
        console.log(`I love ${name}`);
    }
    sayIt(x);
}

outer();


