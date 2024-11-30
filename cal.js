const display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            currentInput = "";
            operator = null;
            previousInput = "";
            display.textContent = "0";
        } else if (value === "=") {
            if (currentInput && previousInput && operator) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`).toString();
                operator = null;
                previousInput = "";
                display.textContent = currentInput;
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
