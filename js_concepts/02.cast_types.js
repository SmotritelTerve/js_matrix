let language = 'JavaScript';

// if работает с булевыми значениями,
// в примере ниже string приводится интерпретатором 
// к типу boolean

if (language){
    console.log('The best languages is: ', language)
}

// существуют определенные значения, которые приводятся к false
// There are only six falsey values in JavaScript:
// undefined , null , NaN , 0 , "" (empty string), and false of course

console.log(Boolean('')); // => false
console.log(Boolean('Hello')); // => true
console.log(Boolean(' ')); // space/пробел => true
console.log(Boolean('0')); // => true
console.log(Boolean(0)); // => false
console.log(Boolean(null)); // => false
console.log(Boolean([])); // => true , да, пустой массив приводится к true
console.log(Boolean({})); // => true , и пустой объект приводится к true
console.log(Boolean(function(){})); // => true , и пустая функция приводится к true