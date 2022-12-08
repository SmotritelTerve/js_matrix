
// var a = {
//    x: 10,
//    calculate: function (z) {
//        return this.x * 2 + this.y + z;
//    }
// };
// Object.prototype.calculate = function (z) {
//    return this.x + this.y + z;
// }
// var b = {
//    y: 20,
//    x: 10,
// };


// var c = {
//    y: 30,
//    x: a.x
// };


// console.log(b.calculate(3));
// console.log(c.calculate(40));

// var Dog1 = {
//     speak: function () {
//       console.log("Bark");
//     },
//     sleep: function () {
//       console.log('sleeping...')
//     }
//   };
  
//   var Cat = Object.create(Dog1);
  
//   Cat.speak = function () {
//     console.log("Meow")
//   };
  
//   Cat.speak()
//   Cat.sleep()

// function sumAll(...args){
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// console.log(1,2);
// console.log(1,2,3);
