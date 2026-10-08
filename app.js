// Core logic functions (can be tested independently)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function formatCount(count) {
  return `Count: ${count}`;
}

// Browser UI initialization (runs only if window/document exists)
if (typeof document !== "undefined") {
  let count = 0;
  const valueDisplay = document.getElementById("counter-value");
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");

  if (incrementBtn && decrementBtn && valueDisplay) {
    incrementBtn.addEventListener("click", () => {
      count = add(count, 1);
      valueDisplay.textContent = count;
    });

    decrementBtn.addEventListener("click", () => {
      count = subtract(count, 1);
      valueDisplay.textContent = count;
    });
  }
}
