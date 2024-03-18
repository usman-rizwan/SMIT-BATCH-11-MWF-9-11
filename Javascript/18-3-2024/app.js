// for (var i = 1 ;i <=10 ; i++){
//     console.log(i)
// }


var cities = ["karachi", "lahore", "islamabad", "Hyderabad", "quetta"];
var userInput = prompt("Enter city name");
var isFound = false;
for (var i = 0; i < cities.length; i++) {
    // console.log(cities[i])
    if (userInput === cities[i]) {
        console.log("city found " + userInput)
        isFound = true
        break;
    }
}
if (isFound === false) {
    console.log("Not Found")
}
// console.log(cities[i])