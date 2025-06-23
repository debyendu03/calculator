const arr = [...document.querySelectorAll("button")];
const display = document.querySelector(".process-and-answer");

arr.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "AC") {
      display.value = "";
      return;
    }
    if (e.value === "C") {
      display.value = display.value.slice(0, -1);
      return;
    }
    if (e.value === "=") {
      display.value = eval(display.value);
      return;
    }

    display.value += e.value;
  });
});
