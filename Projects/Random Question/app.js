let jsQuestions = [
  "1. Declare a variable named 'age' and assign it the value 25.",
  "2. Create an array named 'fruits' with the elements 'apple', 'banana', and 'cherry'.",
  "3. Add 'orange' to the end of the 'fruits' array.",
  "4. Remove the first element from the 'fruits' array.",
  "5. Write a function named 'sum' that takes two parameters and returns their sum.",
  "6. Write an if statement that checks if a variable 'x' is greater than 10.",
  "7. Create a variable 'isAdult' and assign it the result of checking if 'age' is greater than or equal to 18.",
  "8. Write a function named 'greet' that takes a name as a parameter and returns 'Hello, ' followed by the name.",
  "9. Create an array named 'numbers' with the elements 1, 2, 3, 4, 5.",
  "10. Use a for loop to iterate over the 'numbers' array and print each number.",
  "11. Write a function named 'isEven' that returns true if a number is even and false otherwise.",
  "12. Write a function named 'multiply' that takes two parameters and returns their product.",
  "13. Write an if-else statement that assigns 'even' to a variable if a number is even and 'odd' if it is not.",
  "14. Create a variable 'result' and use the ternary operator to assign 'pass' if a variable 'score' is greater than 50, otherwise 'fail'.",
  "15. Declare a variable 'message' and assign it the value 'Hello, World!'.",
  "16. Write a function named 'max' that takes two numbers and returns the larger one.",
  '17. Create a for loop that prints the numbers from 1 to 10.',
  "18. Create an array named 'letters' with the elements 'a', 'b', 'c'.",
  "19. Write a function named 'square' that takes a number and returns its square.",
  "20. Write an if statement that checks if a variable 'temperature' is less than 0 and prints 'Freezing' if true."
]

var allBoxes = document.getElementsByClassName('box')

console.log(jsQuestions[10])
console.log(Math.floor(Math.random() * 20))

for (var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener('click', function () {
    clearAll()
    
    this.style.backgroundColor = '#fff'
    this.style.color = '#000'
    this.style.fontSize = '16px'
    this.innerText = jsQuestions[Math.floor(Math.random() * 20)]
  })
}

function clearAll () {
  //   console.log('this-->', this)
  for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.backgroundColor = '#000'
    allBoxes[i].style.color = '#fff'
    allBoxes[i].style.fontSize = '40px'
    allBoxes[i].innerText = i + 1
  }
}
