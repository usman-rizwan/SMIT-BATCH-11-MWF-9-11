
// Airthmatic Operators
// Add            +
// subtract       -
// muliply        *
// divide         /
// modulus        %


// var a = 5
// var b = 10
// var add = a + b       //add
// var multiply = a * b  //multiply
// var divide = b / a    //divide
// var subtract = b - a  //subtract
// var modulus = b % a   //modulus

// alert(modulus)
// alert(add)
// alert(divide)
// alert(subtract)
// alert(multiply)

// var maths = 80
// var english = 70
// var urdu = 80
// var pst = 70

// var totalMarksSecure = maths + english + urdu + pst
// var totalMarks = 400

// var percentage = totalMarksSecure * 100 / totalMarks
// alert(percentage + '%')



var bottleCost = 180
var totalBottle = 5
var pizzaCost = 1500
var totalPizza = 5
var discount = 10
var tax = 13

var totalCost = (bottleCost * totalBottle) + (pizzaCost * totalPizza)
alert('totalCost ' +  totalCost)
var taxPrice = totalCost * 13 / 100
alert('taxPrice ' +  taxPrice)
var priceAfterTax = totalCost + taxPrice
alert('priceAfterTax  ' +  priceAfterTax)
var discount = priceAfterTax * 10 / 100
alert('discount  ' +  discount)
var netCost = priceAfterTax - discount
alert('netCost  ' +  netCost)

