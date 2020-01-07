// Function Expression & Function Declaration

// можно вызвать до того, как её определили
// подобный способ называется Function Declaration
console.log(square(2)); // => 4

function square(num){
    return num ** 2;
}

// Function Expression 
//console.log(square2(2)); // ReferenceError: square2 is not defined

const square2 = function(num){   // можно вместо const использовать var
    return num ** 2;
}

console.log(square2(2)); // => 4

// функции определенные с помощью Function Expression можно использовать только после их определения,
// в данном случае хоистинг невозможен