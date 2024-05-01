

// var date = new Date();
// console.log( date.toString().slice(0,15))
// console.log(date.getDay())


// var dayOfWeeks = ["Sunday" , "Monday " , "TUesday " , "Wednesday" , "Thursday"]

// console.log(dayOfWeeks[date.getDay()])


// console.log(date.getHours() , date.getMinutes() , date.getSeconds() ,date.getMilliseconds())
// var date = new Date();

// var mSecoFrom1970 = date.getTime()
// console.log("milliseconds=>", mSecoFrom1970);
// console.log("seconds=>", Math.floor(mSecoFrom1970 / 1000));
// console.log("minute=>", Math.floor(mSecoFrom1970 / 1000 / 60));
// console.log("hours=>", Math.floor(mSecoFrom1970 / 1000 / 60 / 60));
// console.log("days=>", Math.floor(mSecoFrom1970 / 1000 / 60 / 60 / 24));
// console.log("months=>", Math.floor(mSecoFrom1970 / 1000 / 60 / 60 / 24 / 30));
// console.log("years=>", Math.floor(mSecoFrom1970 / 1000 / 60 / 60 / 24 / 365));


// var baqraEidDate = new Date()

// baqraEidDate.setDate(16)
// baqraEidDate.setMonth(5)

// console.log('baqraEidDate milliseconds=>', baqraEidDate.getTime())
// console.log('mSecoFrom1970=>', mSecoFrom1970)

// var difference = baqraEidDate.getTime() - mSecoFrom1970
// console.log(difference / 1000 / 60 / 60 / 24)

// var btn = document.getElementById('btn')
// var updatedTime = setInterval(function () {
//     var time = new Date()
//     console.log(time);
// },1000)




// function stopTime() {
//     clearInterval(updatedTime)
// }


var hours = document.getElementById("hours")
var minutes = document.getElementById("mins")
var seconds = document.getElementById("sec")

var updated = setInterval(function () {
    var date = new Date()
    hours.innerText = date.getHours()
    minutes.innerText = date.getMinutes()
    seconds.innerText = date.getSeconds()

}, 1000)
// clearInterval(updated)