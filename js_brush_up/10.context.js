// function context(){
//     return this
// }

// const arrowContext = () => {
//     return this
// }

//arrow functions do not have their own context, they use upper context

function context(){
    return {
        name: 'Alex',
        age: 10,
        getData(){
            return this
        }
    }
}

function contextA(){
    return {
        name: 'Alex',
        age: 10,
        getData(){
            return () => {
                return this
        }
    }
}

}

const arrowContext = () => {
    return this
}



console.log(context());
console.log(contextA());
console.log(arrowContext());

// we have 3 methods to set context:
// call
// apply
// bind


function contextNew(a, b){
    console.log(a, b)
    return this
}

console.log(contextNew.apply({name: 'Dima'}, [1,2]));
console.log(contextNew.call({name: 'Dima'},1,2));

const newFunc = contextNew.bind({name: 'Dima'},1,2);
console.log(newFunc);
