const incr_btn = document.getElementById("icrement") as HTMLButtonElement;
const decr_btn = document.getElementById("decrement") as HTMLButtonElement;
const num = document.getElementById("number") as HTMLHeadingElement;

let counterNum: number = 0;

decr_btn.disabled = true;

// incr_btn.style.backgroundColor = "red";
// incr_btn.style.color = "white";

function handleIncrDecr(clickOn: "plus" | "minus") {
  if (clickOn == "plus") counterNum++;
  if (clickOn == "minus") counterNum--;

  if (counterNum === 0) {
    decr_btn.disabled = true;
  } else {
    decr_btn.disabled = false;
  }
  num.innerText = counterNum.toString();
}

incr_btn.addEventListener("click", () => handleIncrDecr("plus"));
decr_btn.addEventListener("click", () => handleIncrDecr("minus"));
