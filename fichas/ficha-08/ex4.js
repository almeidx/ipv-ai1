const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.disabled) return;

  const number = Math.floor(Math.random() * 11); // (max - min + 1) + min

  console.log({ number });

  const guess = parseInt(input.value, 10);
  if (Number.isNaN(guess) || guess !== number) {
    alert(`Wrong. Correct number: ${number}`);
    input.value = "";
    return;
  }

  alert("Tá certa!!");

  input.disabled = true;
});
