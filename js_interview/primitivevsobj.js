function modify(obj){
    obj.x = 12;
}   

const testObj = {a: 12, b: 12};

modify(testObj);

console.log(testObj);

function modifyPrimitives(arg) {
    arg += ' test';
}

const str = 'abc';

// str += '12';
// TypeError: Assignment to constant variable.

modifyPrimitives(str);

console.log(str);