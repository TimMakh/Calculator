let a = "";
let b = "";
let sign = "";
let finish = false;

const display = document.querySelector(".display");
const clear = document.querySelector(".calc__btn--clear");

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  display.textContent = "0";
}

clear.addEventListener("click", function (e) {
  clearAll();
});

document.querySelector(".main__content").onclick = (event) => {
  if (!event.target.classList.contains("calc__btn")) return;

  if (event.target.classList.contains("calc__btn--clear")) return;

  display.textContent = "";
  const meaning = event.target.textContent;

  if (number.includes(meaning)) {
    if (b === "" && sign === "") {
      a += meaning;
      display.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = meaning;
      finish = false;
      display.textContent = b;
    } else {
      b += meaning;
      display.textContent = b;
    }
    return;
  }

  if (action.includes(meaning)) {
    sign = meaning;
    display.textContent = sign;
    console.log(sign);
    return;
  }

  if (meaning === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "*":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          display.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    display.textContent = a.toFixed(1);
  }
  if (meaning === "%") {
    a = a / 100;
    finish = true;
    display.textContent = a.toFixed(1);
  }
  if (meaning === "+/-") {
    a = -a;
    finish = true;
    display.textContent = a.toFixed(1);
  }
};
