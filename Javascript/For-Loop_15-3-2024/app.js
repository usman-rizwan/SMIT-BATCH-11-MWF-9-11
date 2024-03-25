




// document.write(cities[0])
// document.write(cities[1])
// document.write(cities[2])
// document.write(cities[3])


//For loop
//while loop
//do loop

//1
//12
//123
//1234
//12345
//123456
//1234567
//12345678
//123456789

//*
//**
//***
//****
//*****
//******



// var tableNumber = prompt('Add Table Number')

// for (var i = 1; i <= 10; i++) {
//     console.log(tableNumber * i)
// }

// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar']

// for (var i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }

//1,3,6,10,15,21,28,36,45

// var num = 0
// for (var i = 1; i < 10; i++) {
//     num = num + i
//     console.log(num)
// }


// for (var i = 1; i < 10; i++) {
//     console.log(i, 10 - i)
// }


//hello

// var strArr = 'hello'.split('')
// var strArrRev = strArr.reverse()
// var strArrJoin = strArrRev.join('')
// console.log(strArrJoin)

// var nam = prompt('Add name to check is it Pallindrome')
// var isItPallindrome = true

// for (var i = 0; i < nam.length; i++) {
//     var start = nam[i]
//     var end = nam[(nam.length - 1) - i]
//     console.log(start)
//     console.log(end)
//     if (start != end) {
//         isItPallindrome = false
//     }
// }
// if (isItPallindrome) {
//     alert('It is pallindrome')
// } else {
//     alert('It is not pallindrome')
// }

var buffe = ['karahi', 'biryani', 'samosa', 'ande', 'aaloo', 'chole',
    'gol gappay']

var userItem = prompt('Item')

var isFound = false
for (var i = 0; i < buffe.length; i++) {
    if (buffe[i] === userItem) {
        isFound = true
    }
}
if (isFound) {
    document.write('It is available')
} else {
    document.write('It is not available')
}