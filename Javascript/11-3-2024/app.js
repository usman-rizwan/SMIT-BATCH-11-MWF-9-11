// var students = ["anas" ,"usman" , "shayan"];
// students.push("ali")
// console.log(students[students.length - 1 ])
// students[2]="ali"
// console.log(students)

// students.pop()

// students.unshift("saad" , true)

// var result = students.push("ali")
// console.log(students)
// console.log(result).....

// var students = ["anas" ,"usman" , "shayan"];
// var returnValue = students.splice(0,3,"ali ", "muzammil")
// console.log(students)
// console.log("returnVAlue== >",returnValue)

// var students = ["anas" ,"usman" , "shayan" , "taha" , "khurram"];

// var returnVAlue = students.slice(2)
// console.log(students)
// console.log(returnVAlue)

// var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M .Phil", "PhD"];

// document.write(`<div> <h1>QUALIFICATIONS </h1>
// <ol >
// <li>${degrees[0]}</li>
// <li>${degrees[1]}</li>
// <li>${degrees[2]}</li>
// <li>${degrees[3]}</li>
// <li>${degrees[4]}</li>
// <li>${degrees[5]}</li>
// <li>${degrees[6]}</li>
// <li>${degrees[7]}</li>

// </ol></div>`);



var studentsName = ["Micheal", "John", "Tony"];
var studentsScore = [80, 60, 45];
var totalMarks = 100;

console.log(`Score of ${studentsName[0] } is ${studentsScore[0]} Percentage: ${studentsScore[0] / totalMarks * 100 }%`)

console.log(`Score of ${studentsName[1] } is ${studentsScore[1]} Percentage: ${studentsScore[1] / totalMarks * 100 }%`)

console.log(`Score of ${studentsName[2] } is ${studentsScore[2]} Percentage: ${studentsScore[2] / totalMarks * 100 }%`)



var colors= ["red" , "blue" , "yellow"];
var userInput = prompt("Please enter color to add in the start of array")
colors.push(userInput);
console.log(colors)



var colors= ["red" , "blue" , "yellow"];
var userInput = prompt("Please enter color name to add in the array");
var indexNumber = prompt("Please enterindex number to add in the array")
colors.splice(indexNumber , 0 ,userInput);
console.log(colors)