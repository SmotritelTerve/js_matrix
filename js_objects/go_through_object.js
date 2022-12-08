// В JavaScript есть несколько способов организации обхода свойств объекта в цикле.
//  Но делается это косвенно, через массивы:
// Метод Object.keys(obj) позволяет получить массив всех ключей объекта:

const myCarsColours = {
    volga : "black",
    mps : "brown"
}

const keys = Object.keys(myCarsColours);

for(let key of keys){
    console.log(myCarsColours[key]);
}

// Можно сразу получить массив значений свойств объекта.
// Это делает метод с таким же "говорящим" именем Object.values(obj):

const values = Object.values(myCarsColours);

for (let value of values){
    console.log(value);
}

// Ну, и метод, который делает работу двух предыдущих — сразу возвращает массив свойств. 
// То есть каждый элемент сам будет массивом, содержащим ключ и соответствующее ему значение — [ key, value ].
// За это отвечает метод Object.entries(obj):

const entries = Object.entries(myCarsColours);

console.log(entries);

// Обойти такой массив циклом for...of не составит никакого труда, а Destructuring позволит сделать это элегантно

for( let [key, value] of entries){
    console.log(key);
    console.log(value);

}
