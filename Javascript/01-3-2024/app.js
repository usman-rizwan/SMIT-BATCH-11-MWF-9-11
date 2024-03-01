var name= "usman"
var age = 10
document.write("<h1>"  + name + "</h1>")
document.write("<h1> My name is "   + name + " and my age is " + age + "</h1>")
// Template strings
document.write(`<h1>My name is ${name} and my age is ${age}</h1>`)

// ul > li 
var maths = 25 ; 
var english = 20;
var urdu = 30;
document.write(`<div><h1>Students result</h1>
<p>Maths ${maths} / marks</p>
<p>English ${english} / marks</p>
<p>Urdu ${urdu} / marks</p>
<p> <b>Total marks ${maths + urdu + english} </b> / marks</p>
</div>`)

/// Table banana hai 
// Marks of 5 subjects 
// no of students = 5 
// roll no of students 
// total marks and percentage of each student

// var nameOfStudent =  prompt("Enter your name");
// console.log(nameOfStudent)
// prompt("enter your age") 
var userInput = prompt("Enter any number to print table");
document.write(`<h4>${userInput} x 1 = ${userInput}</h4>`)
document.write(`<h4>${userInput} x 2 = ${userInput * 2}</h4>`)
// document.write(``)