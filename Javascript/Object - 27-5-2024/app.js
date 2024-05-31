var myInfo = {
  name: "Bilal Raza", //property
  fatherName: "Muhammad Jawed", //string
  isMarried: true, //boolean
  childrens: 2, // Number
  age: 27,
};

//ADD PROPERTY
myInfo.CNIC = "4210197022321";

myInfo.dob = new Date("04-19-1997"); // object

myInfo.caluclateAge = function () {
  var now = new Date().getFullYear();
  var userDobYear = new Date(this.dob).getFullYear();
  var userAge = now - userDobYear;
  return userAge;
};

// console.log("myInfo=>", myInfo);

// console.log("Calculate age Mehthod", myInfo.caluclateAge());

//delete object property
delete myInfo.age;

// console.log("My Info after delete=>", myInfo);

// console.log(myInfo.name);

document.getElementById("userName").innerText = myInfo.name;
document.getElementById("fatherName").innerText = myInfo.fatherName;
document.getElementById("dob").innerText = new Date(
  myInfo.dob
).toLocaleDateString();
document.getElementById("age").innerText = myInfo.caluclateAge();

//constructor function
function Student(name, fatherName, age, attendance) {
  this.name = name; // object ki propert add ki this ke through
  this.fatherName = fatherName;
  this.age = age;
  this.attendance = attendance;
  // this.totalClasses = totalClasses;
}

Student.prototype.totalClasses = 60;
Student.prototype.isStudentPunctual = function () {
  var userAttendance = this.attendance / this.totalClasses;
  if (userAttendance >= 0.9) {
    return true;
  } else {
    return false;
  }
};

var student1 = new Student("Abdullah", "Ahmed", 14, 50);
var student2 = new Student("Asim", "Muneer", 20, 50);
var student3 = new Student("Usman", "Qadir", 14, 55);
var student4 = new Student("Ubaid", "Shahid", 20, 60);

student1.isPunctual = student1.isStudentPunctual();

// console.log("student1=>", student1);
// console.log("student2=>", student2.isStudentPunctual());
// console.log("student3=>", student3.isStudentPunctual());
// console.log("student4=>", student4.isStudentPunctual());

// var student1 = {
//   name: "Abdullah",
//   fatherName: "Ahmed",
//   age: 14,
//   attendance: 50,
//   totalClasses: 60,
// };

// var student2 = {
//   name: "Asim",
//   fatherName: "Muneer",
//   age: 20,
//   attendance: 55,
//   totalClasses: 60,
// };

// var student3 = {
//   name: "Usman",
//   fatherName: "Qadir",
//   age: 20,
//   attendance: 60,
//   totalClasses: 60,
// };

//mutable -> wo types jo update hosaken
// Object , Array

//immutable , primitive => jo update na ho balke replace hon
// string , number , boolean , undefined

var x = "x";
var abc = "abc"
// abc[0] = "A"
abc.replace("a","A")
abc = abc.replace("a","A")


console.log(abc);
var y = x;
x = "XX";
console.log("x=>", x);
console.log("y=>", y);

var obj = {
  name: "Ahmed",
};

var obj1 = obj;
console.log(obj1);
obj1.name = "Abdullah";

console.log("obj=>", obj);
console.log("obj1=>", obj1);
