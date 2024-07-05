// var x = undefined
//function square(num) {
//  return num * num;
//}
// var square1 = undefined
// var square2 = undefined

// console.log("x=>", x);

// var x = "Twitter";
// console.log("x=>", x);

// console.log("call function", square(4));

// function square(num) {
//   return num * num;
// }

// var square1 = square(3);
// if (square == 9) {
//   console.log("1242");
// }
// var square2 = square(4);

//difference between var and let/const

//1.variable made using var can be redeclare , but variable made
// using let/const cannot be redeclare

// var x = 'Hello Twitter'
// var x = 'Twitter'

// console.log(x)

// let x = 'Hello Twitter'
// let x = 'Twitter'

//2.variable made using var can be used before it is declared
// but variable made using let/const cannot be used before it is
// declared

// console.log(x)
// var x = 'Twitter'

// tdz -> Temporal Dead Zone
// tdz -> Temporal Dead Zone
// tdz -> Temporal Dead Zone
// tdz -> Temporal Dead Zone
// console.log(x);
// let x = "Twitter";

//3.variable made using var have either functional scope or global scope
// but variable made using let/const have block scope

// function varScoping() {
//   var x = 1;
//   console.log(y); // it will be undefined as it is in scope but not declare
//   if (true) {
//     var x = 2;
//     console.log(x); // will print 2
//     if (true) {
//       var y = 4;
//     }
//   }

//   console.log(x); // will print 2
// }

// varScoping();

// function blockScoping() {
//   let x = 1;
//   if (true) {
//     let x = 2;
//     console.log(x); // will print 2
//     if (true) {
//       // y will be declared in its scope
//       x = 4;
//     }
//     console.log("x after update==>", x);
//   }

//   console.log(x); // will print 2
// }

// blockScoping();

// let or const mein kya farq he

// let ko update krsakte , const ko update nahn krsakte

// const x = { num: 3 };

// x.num = 10;

// console.log(x.num);


console.log(heading)