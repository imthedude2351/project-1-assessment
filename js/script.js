/*----- app's state (variables) -----*/

let total;

/*----- cached element references -----*/

const inputEl = document.querySelector("#one");
const totalEl = document.querySelector("h1 span");

/*----- event listeners -----*/

document.getElementById("plus").addEventListener("click", handlePlus);
document.getElementById("minus").addEventListener("click", handleMinus);

/*----- functions -----*/

function init() {
    total = 0;
    render();
}

init();

function render() {
    if (total >= 0) {
        totalEl.textContent = total;
        totalEl.style.color = "black";
        inputEl.value = "1";

    } else {
        totalEl.textContent = total;
        totalEl.style.color = "red";
        inputEl.value = "1";
    } 
}

function handlePlus() {
    let plusValue = parseInt(inputEl.value);
    total += (plusValue);
    render();
 }

 function handleMinus() {
    let minusValue = parseInt(inputEl.value);
    total -= (minusValue);
    render();
 }
