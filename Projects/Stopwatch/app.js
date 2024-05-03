var min_html = document.getElementById('min')
var seconds_html = document.getElementById('seconds')
var milliSeconds_html = document.getElementById('ms')
var start_btn = document.getElementById('start_btn')

var seconds = 0
var milliSeconds = 0
var minutes = 0

var watchInterval

function start () {
  watchInterval = setInterval(function () {
    milliSeconds++
    if (milliSeconds >= 99) {
      seconds++
      milliSeconds = 0
    }
    if (seconds >= 59) {
      minutes++
      seconds = 0
    }
    milliSeconds_html.innerText = milliSeconds
    seconds_html.innerText = seconds < 10 ? '0' + seconds : seconds
    min_html.innerText = minutes < 10 ? '0' + minutes : minutes

    //disable the button
    start_btn.disabled = true
  }, 10)
}
function stop () {
  clearInterval(watchInterval)

  //enable the button
  start_btn.disabled = false
}
function reset () {
  clearInterval(watchInterval)
  milliSeconds = 0
  seconds = 0
  minutes = 0
  min_html.innerText = 0
  seconds_html.innerText = 0
  milliSeconds_html.innerText = 0

  //enable the button
  start_btn.disabled = false
}
