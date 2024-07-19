// let userName: string = "Bilal Raza";
// let userAge: number = 28;
// let userFavDishes: string[] = ["Biryani", "Daal Chawal"];
// let userIsMarried: boolean = false;

// console.log("userName=>", userName);
// console.log("userAge=>", userAge);

// userIsMarried = true;

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number | string;
//   CNIC?: number;
//   favSubjects: string[];
//   favNumbers: number[];
// }

// const user: User = {
//   firstName: "Bilal",
//   lastName: "Raza",
//   favNumbers: [10, 12],
//   favSubjects: ["English", "Urdu"],
//   age: 28,
// };

function greet(name: string): string {
  return `Hello ${name}`;
}

let msg : string =  greet("Bilal Raza");

console.log(msg)
