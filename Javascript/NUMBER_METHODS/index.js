

// round number example

var round_input = document.getElementById('round_input')
var round_result = document.getElementById('round_result')
var random_result = document.getElementById('random_result')

function round() {
    var roundResult = Math.round(round_input.value);
    round_result.innerText = "==>" + roundResult
}

function ceil() {
    var roundResult = Math.ceil(round_input.value);
    round_result.innerText = "==>" + roundResult
}

function floor() {
    var roundResult = Math.floor(round_input.value);
    round_result.innerText = "==>" + roundResult
}

function generateRandomNumber() {
    var random = Math.random()
    var randomTo100 = Math.ceil(random * 6)
    random_result.innerText = "Random=> " + random + ", Multiply By 100=> " + randomTo100
}


// string ko number ko conver karna
var number = '100a0.254'

// start mein plus lagado
// console.log(+number)

// // Number
// console.log(Number(number))

// //parseint
// console.log(parseInt(number))

// //parse float
// console.log(parseFloat(number))

// // convert number into string
// var number = 1123
// console.log(number.toString())

// // control the length of Decimal
// console.log(Number(10/3).toFixed(2) )





// function showNumber(num){
//     console.log(num)
// }

// showNumber(1000)
// showNumber(2)
// showNumber(3)
// showNumber(4)


var result_num = document.getElementById('result_num')
var user_num = document.getElementById('user_num')
var result_box = document.getElementById('result_box')

function checkNumber(userNumber) {
    // alert(userNumber)

    var randomNumber = Math.ceil(Math.random() * 6)
    user_num.innerText = userNumber
    result_num.innerText = randomNumber
    if (userNumber == randomNumber) {
        result_box.innerText = 'Congrats!, You won'
        result_box.style.color = 'green'
    } else {
        result_box.innerText = 'Soory!, You lose , Try Again'
        result_box.style.color = 'red'
    }
}