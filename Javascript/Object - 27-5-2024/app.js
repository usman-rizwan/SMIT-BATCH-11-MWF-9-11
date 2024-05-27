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
  //   console.log("this=>", this.dob);
  var now = new Date().getFullYear();
  var userDobYear = new Date(this.dob).getFullYear();
  var userAge = now - userDobYear;
  return userAge;
}; // object

console.log("myInfo=>", myInfo);

console.log("Calculate age Mehthod", myInfo.caluclateAge());

//delete object property
delete myInfo.age;

console.log("My Info after delete=>", myInfo);

console.log(myInfo.name);

document.getElementById("userName").innerText = myInfo.name;
document.getElementById("fatherName").innerText = myInfo.fatherName;
document.getElementById("dob").innerText = new Date(
  myInfo.dob
).toLocaleDateString();
document.getElementById("age").innerText = myInfo.caluclateAge();

// var allUsers = [myInfo , myInfo , myInfo];

// console.log("allUsers=>", allUsers[1].childrens);

var object = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};
