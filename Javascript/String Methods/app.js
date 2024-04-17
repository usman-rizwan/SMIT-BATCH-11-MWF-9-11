

var a = 'a'
var A = 'A'


// console.log(a === A.toLowerCase())
// console.log(a.toUpperCase() === A)

//lowercase uppercase example

// var cities = ['kaRachi', 'lahore', 'islamabad']

// var userCity = prompt('Enter your city')

// for (var i = 0; i < cities.length; i++) {
//     if (userCity.toLowerCase() == cities[i].toLowerCase()) {
//         alert("It's in our list")
//         break
//     }
// }



// string length and copy string

// var smit = 'saylani'

// console.log(smit.slice(1))

// console.log(smit[0].toUpperCase() + smit.slice(1))

// console.log(smit[6])




// var txt = 'Which platform you will be using for the payment.'

// if(abc == ' ')
// for (var i = 0; i < txt.length; i++) {
//     if (txt.slice(i, i + 7) === 'payment') {
//         alert('Payment word is not allowed')
//     }
// }


// 1.toUpperCase() => convert string to Uppercase
// 2.toLowerCase() => convert string to lowercase
// 3.indexOf()     => tell the position of letter , and if not found return -1
// 4.lastIndexOf() => tell the last position of letter , and if not found return -1
// 5.slice()       => to copy string 
// 6.charAt()      => take the index number and return the letter on that index number
// 7.replace()     => take 2 parameters and replace the first one with second one
// 8.trim()        => remove extra spaces from start and end
// 9.length

var str = 'Bilal Raza'
//uppercase
console.log(str.toUpperCase())

//lowercase
console.log(str.toLowerCase())

//indexOf
console.log(str.indexOf('a'))

// var userInfo = prompt('User info')
// console.log(userInfo.indexOf('  '))

// if (userInfo.indexOf('  ') != -1) {
//     alert('Only single space is allowed')
// }

//last Index Of
console.log(str.lastIndexOf('a'))


// 5.slice()  => to copy string 
var username = 'basit'
console.log(username.charAt(0).toUpperCase() + username.slice(1))
// var firstLetter = username.charAt(0)
// console.log("firstLetter=>", firstLetter)

// firstLetter = firstLetter.toUpperCase()
// console.log("firstLetter UpperCase=>", firstLetter)

// var copyAll = username.slice(1)
// console.log("Copy All=>", copyAll)

// var capitilize = firstLetter + copyAll
// console.log("Capitilize=>", capitilize)

//replace
var string = 'Ubaid is very cute.Ubaid always very loud in the class.'

string = string.replace('Ubaid', 'Obaid')

string = string.replaceAll('Ubaid', 'Obaid')
console.log(string)

//length
var email = '  attari1235@gmail.com  '
console.log("Email Lenght=>", email.length)

//trim
email = email.trim()
console.log("Email Lenght=>", email.length)



//count number of a letters used in string
var string = 'Ubaid is very cute.Ubaid always very loud in the class.'

var count = 0
for (var i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() == 'u') {
        count++
    }
}

console.log("Number of A's are " + count)
