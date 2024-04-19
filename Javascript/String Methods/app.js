

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
// console.log(str.toUpperCase())

//lowercase
// console.log(str.toLowerCase())

//indexOf
// console.log(str.indexOf('a'))

// var userInfo = prompt('User info')
// console.log(userInfo.indexOf('  '))

// if (userInfo.indexOf('  ') != -1) {
//     alert('Only single space is allowed')
// }

//last Index Of
// console.log(str.lastIndexOf('a'))


// 5.slice()  => to copy string 
// var username = 'basit'
// console.log(username.charAt(0).toUpperCase() + username.slice(1))
// var firstLetter = username.charAt(0)
// console.log("firstLetter=>", firstLetter)

// firstLetter = firstLetter.toUpperCase()
// console.log("firstLetter UpperCase=>", firstLetter)

// var copyAll = username.slice(1)
// console.log("Copy All=>", copyAll)

// var capitilize = firstLetter + copyAll
// console.log("Capitilize=>", capitilize)

//replace
// var string = 'Ubaid is very cute.Ubaid always very loud in the class.'

// string = string.replace('Ubaid', 'Obaid')

// string = string.replaceAll('Ubaid', 'Obaid')
// console.log(string)

//length
// var email = '  attari1235@gmail.com  '
// console.log("Email Lenght=>", email.length)

//trim
// email = email.trim()
// console.log("Email Lenght=>", email.length)



//count number of a letters used in string
// var string = 'Ubaid is very cute.Ubaid always very loud in the class.'

// var count = 0
// for (var i = 0; i < string.length; i++) {
//     if (string.charAt(i).toLowerCase() == 'u') {
//         count++
//     }
// }

// console.log("Number of A's are " + count)



//q.Take words or sentence from user using prompt and then
//show alert or console that how many vowels are used in this sentence/words
//like in Bilal there are two vowels and 3 non vowels


// var userInfo = prompt('Add something')

// var vowelCount = 0
// var nonVowelCount = 0
// for (var i = 0; i < userInfo.length; i++) {
//     console.log(userInfo.charAt(i))
//     var alphabet = userInfo.charAt(i).toLowerCase()
//     if (alphabet == 'a' || alphabet == 'i' || alphabet == 'e' || alphabet == 'o' || alphabet == 'u') {
//         vowelCount++
//     } else if (alphabet !== ' ') {
//         nonVowelCount++
//     }
// } console.log('Vowels are ', vowelCount, 'Non Vowels are', nonVowelCount)


//q.bilal raza attari

// var username = prompt('Add your full name', 'usman rizwan')
// var username_arr = username.split(' ')
// console.log("usernam=>", username)
// console.log("username_arr=>", username_arr)

// for (var i = 0; i < username_arr.length; i++) {
//     var word = username_arr[i]
//     console.log(word)
//     var capitilize = word.charAt(0).toUpperCase() + word.slice(1)
//     console.log("capitilize==>", capitilize)
//     username_arr[i] = capitilize
// }

// console.log("username_arr after update=>", username_arr)
// username = username_arr.join(' ')

// console.log("username after update=>", username)


//Q.Take Password from user 
// If Password have min 8 length , 1 Capital letter , 1 Number then password is ok otherwise password is wrong.

var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '1234567890'

var password = prompt('Password')

var minLength = false
var capitalLetterHe = false
var numberHe = false

if (password.length >= 8) minLength = true
for (var i = 0; i < password.length; i++) {
    console.log(password[i])
    if (capitalLetters.indexOf(password[i]) !== -1) {
        capitalLetterHe = true
    }
    if (numbers.indexOf(password[i]) !== -1) {
        numberHe = true
    }
}

if (minLength && capitalLetterHe && numberHe) {
    alert('Password is ok')
} else {
    alert('Password is not ok')

}