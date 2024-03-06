// console.log("testing");
// var num  = 41;
// var num2 = ++num ;
// console.log(num2)
// console.log(num)


// var gender = prompt("Enter your gender");
// if (gender === "male") {
//     console.log("Hello sir!")
// }else if(gender === "female"){
//     console.log("hello MAdam")
// }else{
//     console.log("Invalid input")
// }


// var age = 10;
// var studentClass = 8
// if (age === 10 && studentClass === 8 ) {
//     console.log("Admission COnfirmed")
// }else if(age === 10 || studentClass === 10){
//     console.log("Test dene aa jao")
// }else{
//     console.log("Sorry")
// }


//  var userInput = prompt("Enter signal color");
//  if (userInput === "red") {
//     console.log("Must Stop");    
//  }
//  else if( userInput === "yellow"){
//     console.log("Ready to move ");   

//  }
//  else if( userInput === "green"){
//     console.log("move ");   

//  }
//  else{
//     console.log("Color not valid "); 
//  }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var randomNum = prompt("Enter number");
// if (randomNum % 3 === 0){
//     alert("Divisible by 3")
// }else{
//     alert("not possible")
// }


// if(true){
//     console.log(true)
// }
// if(false){
//     console.log(false)
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.



// var userInput = prompt("Enter number");
// if (userInput % 2 === 0) {
//     console.log("Your number is even")
// }
// else {
//     console.log("your number is odd")
// }

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var users_value = prompt('enter any number')
var users_second_value = prompt('enter 2 number')
var users_operation_value = prompt('enter operation + - * / %')
// console.log(users_operation_value , users_second_value ,users_value)

if (users_operation_value === "+") {
    console.log(Number(users_value) + Number(users_second_value))  
}else if(users_operation_value === "-"){
    console.log(users_value - users_second_value)
}
else if(users_operation_value === "*"){
    console.log(users_value * users_second_value)
}
else if(users_operation_value === "/"){
    console.log(users_value / users_second_value)
}
else if(users_operation_value === "%"){
    console.log(users_value % users_second_value)
}else{
    console.log("Invalid operator")
}
 

