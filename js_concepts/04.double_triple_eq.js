// == vs ===
// == сравнивает с приведением типов
// === сравнивает без приведения типов

console.log(2 == '2'); // => true
console.log(2 === '2'); // => false
console.log(undefined == null); // => true
console.log(undefined === null); // => false

// рекомендуется всегда использовать === чтобы избежать ошибок связанных с приведением типов

console.log('0' == false); // => true
console.log('0' == 0); // => true
console.log(0 == 0); // => true

console.log(false == ''); // => true
console.log(false == []); // => true
console.log(false == {}); // => false

console.log('' == 0); // => true
console.log('' == []); // => true
console.log('' == {}); // => false

console.log(0 == []); // => true
console.log(0 == {}); // => false
console.log(0 == null); // => false

