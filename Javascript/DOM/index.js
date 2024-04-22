


//Function , block of code that does the same work again and again
//function banana // initialize krna 

function sayHello() {
    console.log('Hello')
}
var p = document.getElementById('para')
function showMore() {
    p.innerText = 'The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.'
}
function showLess() {
    p.innerText = 'The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure.'
}

sayHello()

// var arr = ['1', '2', '3'].length

// arr.push('4')

// console.log(arr)



var span = document.getElementById('number')
var count = 1

function increment() {
    // count++
    span.innerText = ++count
}

function decrement() {
    // count--
    span.innerText = --count

}


function seeLettersWords(){
    var input = document.getElementById('input')
    var value = input.value
    var letter = value.length
    var words = value.split(' ').length
    document.getElementById('output').innerText = 'Total Words : ' + words + ' Total Letters : ' + letter
}