// var userCity = prompt("Where do you live");
// console.log(typeof userCity)
// prompt always return string
/// === value or type dono check karta hai 
// == sirf value check karta hai 
// !== agr barabar na ho 
// var num = 10;


// if(userCity === "Karachi" ){
// alert("Hired")
// }
// if (userCity !== "Karachi") {
//     alert("Karachi ajao")
// }

// var number = 10;
// var score = 0;
// var userInput = prompt("Guess the number");
// if(userInput == number ){
// score++
// console.log(`Your score is ${score}`)
// }


// var age = 18;
// var userAge = +prompt("Enter  your age");
// console.log(typeof userAge)

// if (userAge >= age) {
//     console.log("You can drive")
// }else{
//     console.log("Wait karo!")
// }

// var lanaKyaHai = prompt("Kya Lana hai");
// var litre = 1;
// if (lanaKyaHai === "Bread") {
//     console.log("Le Aaonga ")
// } else if (lanaKyaHai === "Milk" && litre === 1 ) {
//     console.log("LE aaooooooo")
// } else if (lanaKyaHai === "Eggs") {
//     console.log("LE AA BHAI")
// } else {
//     console.log("Khali hath na ana")
// }

// var age = +prompt("Enter your age");
// var gender = prompt("Enter your gender");


// if(age >= 18 && gender === "male" ){
//     console.log("You can drive")
// }else if(age >= 34 && gender === "female"){
//     console.log("You can also drive")
// }else{
//     console.log("Error----->")
// }


var html = +prompt("Enter your obtained html marks");
var css = +prompt("Enter your obtained css marks");
var javaScript = +prompt("Enter your obtained js marks");
var obtainedNumbers = html + css + javaScript;
var totalNumbers = 300;

var percentage = obtainedNumbers / totalNumbers * 100;
if(percentage >= 80){
    console.log("Congrats A+ Grade !!")
}else if(percentage >= 70){
    console.log("Congrats A Grade !!")
}else if(percentage >= 60){
    console.log("Sirf B Grade !!")
}else if(percentage < 60){
    console.log("Congrats you are fail !!")
}else{
    console.log("Numbers are not valid")
}
console.log(percentage)