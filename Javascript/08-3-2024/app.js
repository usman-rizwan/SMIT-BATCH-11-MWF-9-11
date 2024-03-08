// var fullName = prompt("Enter your fullname")
// if (fullName == "usman" ) {
//     var age = prompt("Enter your age");
//   if (age >= 18) {
//     console.log("You are old");
//   }else{
//     console.log("You are young")
//   }
// }else{}


// Array is a collection multiple dataTypes



// var student1 = "taha";
// var student2 = "Anas";

// var students = ["Usman" , "shayan" , "faisal" , true , 12323 , 216546546544 ];

// students[2] = false;

// students[students.length] = "muzammil";
// students[students.length] = "nademm";
// students[students.length] = "qadeer";
// console.log(students) 
// console.log(students.length) 
// console.log(students[7]) // UNDEFINED
// console.log(students1[7])NOT DEFINED
// console.log(students.length)    




// var students = ["Usman" , "shayan" , "faisal" , true , 123  ];
// var returnValue =  students.push(false , "ali" , 474)

// console.log(students)
// console.log(returnValue) // Returns original Array updated length 

// var students = ["Usman" , "shayan" , "faisal" , true , 123 ];

// var returnValue = students.pop()
// console.log(students)
// console.log(returnValue) // Returns deleted value




// var students = ["Usman", "shayan", "faisal", true, 123];
// var returnValue = students.shift() // Removes first value of array and update original array
// console.log(students)
// console.log(returnValue) // returns  deleted value 


// var students = ["Usman" , "shayan" , "faisal" , true , 123];

// var returnValue =  students.unshift("Mustafa" , 456)
// console.log(students);
// console.log(returnValue); // returns  updated length 



var students = ["Usman" , "shayan" , "faisal" , true , 123];
var returnValue = students.splice(0,0,"Anas", "Bilal") // 1) index number , 2) kitne values delete karni hai ,3) kia addd karna hai
console.log(students);
console.log(returnValue);