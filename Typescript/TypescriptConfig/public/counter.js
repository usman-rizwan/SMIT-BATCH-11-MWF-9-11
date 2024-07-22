"use strict";
const incr_btn = document.getElementById("icrement");
const decr_btn = document.getElementById("decrement");
const num = document.getElementById("number");
let counterNum = 0;
decr_btn.disabled = true;
// incr_btn.style.backgroundColor = "red";
// incr_btn.style.color = "white";
function handleIncrDecr(clickOn) {
    if (clickOn == "plus")
        counterNum++;
    if (clickOn == "minus")
        counterNum--;
    if (counterNum === 0) {
        decr_btn.disabled = true;
    }
    else {
        decr_btn.disabled = false;
    }
    num.innerText = counterNum.toString();
}
incr_btn.addEventListener("click", () => handleIncrDecr("plus"));
decr_btn.addEventListener("click", () => handleIncrDecr("minus"));
