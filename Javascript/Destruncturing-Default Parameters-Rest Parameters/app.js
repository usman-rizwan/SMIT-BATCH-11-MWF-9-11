// // Destructuring in object

// let car = {
//     name: "Prius",
//     model: 2022,
//     isNew: false,
//     mileage: 200000,
//     color: "black",
//   };
  
//   let mileage = "123";
  
//   const { color, mileage: carMileage, name } = car;
  
//   console.log(color);      // Output: black
//   console.log(mileage);    // Output: 123
//   console.log(name);       // Output: Prius
  
//   let carMileage = car.mileage;
//   let carColor = car.color;
  
//   // Destructuring of array
  
//   var arr = ["abc", "def", "ghi", "jkl"];
  
//   const [a, , c] = arr;
//   var a = arr[0];
//   var c = arr[2];
  
//   console.log("a =>", a);  // Output: abc
//   console.log("c =>", c);  // Output: ghi
  
//   // Spread Operator
  
//   var arr = [1, 2, 3, 4, 5, 6, 7];
//   var arr1 = [8, 9, 10];
  
//   var combine = [...arr, ...arr1];
//   console.log(combine);    // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
//   let car = {
//     name: "Prius",
//     model: 2022,
//     isNew: false,
//     mileage: 200000,
//     color: "black",
//   };
  
//   let car1 = { ...car };
//   car1.model = 2021;
  
//   console.log("car =>", car);    // Output: {name: "Prius", model: 2022, isNew: false, mileage: 200000, color: "black"}
//   console.log("car1 =>", car1);  // Output: {name: "Prius", model: 2021, isNew: false, mileage: 200000, color: "black"}
  
//   let car1 = {
//     ...car,
//     model: 2021,
//   };
  
//   // Default Parameters
  
//   function sum(a = 0, b = 0) {
//     return a + b;
//   }
  
//   let sumValue = sum(10, 30);
//   console.log(sumValue);    // Output: 40
  
//   let car = {
//     name: "Prius",
//     model: 2022,
//     isNew: false,
//     mileage: 200000,
//     color: "black",
//     isInShowRoom: false,
//   };
  
//   let { name, isInShowRoom = true, ...remaining } = car;
  
//   console.log(remaining);   // Output: {model: 2022, isNew: false, mileage: 200000, color: "black"}
  
//   // Conditional (ternary) operator
  
//   let age = 18;
//   let gender = "male";
  
//   let isEligible = age >= 18 && gender == "male" ? true : gender === "female" ? true : false;
  
//   // Equivalent if-else statement
//   if (age >= 18 && gender == "male") {
//     isEligible = true;
//   } else if (gender === "female") {
//     isEligible = true;
//   } else {
//     isEligible = false;
//   }
  
//   // Applying conditional (ternary) operator in a loop
  
//   let arr = [
//     { name: "Rejected", status: "rejected" },
//     { name: "Ok", status: "ok" },
//     { name: "Pending", status: "pending" },
//   ];
  
//   arr.forEach((data) => {
//     let { name, status } = data;
//     let ele = `
//       <div style="height: 200px; background-color: ${
//         status === "rejected" ? "red" : status === "ok" ? "green" : "yellow"
//       };">
//         <h1>${name}</h1>
//       </div>`;
  
//     list.innerHTML += ele;
//   });
  