//1. Mutable can be updated ,Immutable  cannot be updated

// var string = "hello world"; //immutable

// string[0] = "H";

// // console.log("replace method=>", string.replace("h", "H"));
// string = string.replace("h", "H");
// console.log(string);

// var array = ["1", "2", "3", "4"]; //mutable

// array.pop();

// console.log("array==>", array);

// //mutable
// var obj = {
//   name: "Bilal",
// };

// obj.name = "Bilal Raza";

// console.log("obj==>", obj);

// //2. Immutable ko jab ham dusre variable mein assign krte hen to uski original
// //value dusre variable mein save hojati or uska peche se koi connection nahn rehta
// //jabke mutable ko ham jab dusre variable mien assign krte hen to
// // reference assign hota he or uska original se connection baaqi rehta he

// var a = "Hello";
// var b = a;
// a = "Hello World!";

// console.log("a-->", a);
// console.log("b-->", b);

// var c = 100;
// var d = c;

// d = 90;

// console.log("c=>", c);
// console.log("d=>", d);

// //mutable

// var obj1 = {
//   name: "Bilal",
// };

// var obj2 = obj1;

// obj1.name = "Bilal Raza";

// console.log("obj1=>", obj1);
// console.log("obj2=>", obj2);

// var todos = [
//   { todo: "Chae peeni he", isDone: false },
//   { todo: "Class mein jana he", isDone: false },
//   { todo: "Office jana he", isDone: false },
//   { todo: "Email ka reply krna he", isDone: false },
// ];

// var todo1 = todos[1];
// todo1.isDone = true;

// console.log("todos=>", todos);

//3. Immutable ko jab ham compare krte to ham value ko match krte hen
// jab ke mutable mein ham reference ko match krte hen.

var num1 = 10;
var num2 = 10;

console.log(num1 === num2);

var arr1 = ["1", "2", "3"];
var arr2 = ["1", "2", "3"];
var arr3 = arr2;

arr2.push('4')

console.log(arr3 === arr2);
