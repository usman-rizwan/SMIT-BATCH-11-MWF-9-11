//3 types of functionn
//1.Function with function keyword

function hello () {
  console.log('hello')
}

//2.Anonymous function -> Function without name
var sayHello = function () {
  console.log('Hello to Everyone')
}
// setInterval(function(){} , 1000000)

//3.Arrow function
let greetings = () => console.log('Greetings')
//greetings()

// parameters and arguments
//declaration
function sum (a, b) {
  var total = a + b

  return total
}
//invokation
var total = sum(10, 20)
console.log(total)

function isEven (num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}

var input = document.getElementById('num')
var answer = document.getElementById('answer')

function checkIsEven () {
  var num = input.value
  if (isEven(num)) {
    answer.innerText = 'It is Even'
  } else {
    answer.innerText = 'It is Odd'
  }
}

// var array = ['1', '2']
// console.log(array.slice(0, 2))

var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var calculation_result = document.getElementById('calculation_result')

function calculate (sign = '+') {
  var num1Value = num1.value
  var num2Value = num2.value
  if (sign == '+')
    calculation_result.innerText = parseInt(num1Value) + parseInt(num2Value)

  if (sign == '-') calculation_result.innerText = num1Value - num2Value

  if (sign == '/') {
    calculation_result.innerText = num1Value / num2Value
  }

  if (sign == 'x') {
    calculation_result.innerText = num1Value * num2Value
  }
}
