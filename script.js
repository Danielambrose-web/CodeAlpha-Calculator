class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    // Prevent typing multiple decimals (e.g. 1.1.1)
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

// Select elements
const numberButtons = document.querySelectorAll("[data-number]");
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);

// Initialize
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// Add Click Listeners
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
