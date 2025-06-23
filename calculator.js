const buttons = document.querySelectorAll("button");
const display = document.querySelector(".process-and-answer");

function isOperator(val) {
  return ["+", "-", "*", "/", "÷"].includes(val);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.value;
    if (val === "AC") {
      display.value = "";
      return;
    }
    if (val === "C") {
      display.value = display.value.slice(0, -1);
      return;
    }
    if (val === "=") {
      try {
        const expr = display.value.replace(/÷/g, "/");
        display.value = eval(expr);
      } catch {
        display.value = "Error";
      }
      return;
    }
    if (val === ".") {
      const parts = display.value.split(/\+|-|\*|\/|÷/);
      if (parts[parts.length - 1].includes(".")) return;
    }
    if (isOperator(val)) {
      if (!display.value || isOperator(display.value.slice(-1))) return;
    }
    display.value += val;
  });
});
