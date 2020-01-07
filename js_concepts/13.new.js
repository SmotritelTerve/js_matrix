function Cat (color, name){
    this.color = color;
    this.name = name;
}

//инстант класса Cat
const cat = new Cat('black', 'Felix');

console.log(cat);  // => Cat { color: 'black', name: 'Felix' }

// можно создать свой метод new, как на самом деле реализован этот метод в ES5

function myNew(constructor, ...args){
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj;   // если не работает, то возвращаем obj
}

const cat2 = myNew(Cat, 'black&white', 'Starki');

console.log(cat2); // => Cat { color: 'black&white', name: 'Starki' }

// а если создать без параметров

cat3 = new Cat();

console.log(cat3);  // => Cat { color: undefined, name: undefined }