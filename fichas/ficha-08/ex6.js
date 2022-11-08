const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.disabled) return;

  const number = Math.floor(Math.random() * 101); // (max - min + 1) + min

  console.log({ number });

  const guess = parseInt(input.value, 10);
  if (Number.isNaN(guess) || guess !== number) {
    if (guess < number) {
      alert("Wrong. Lower");
    } else {
      alert("Wrong. Higher");
    }

    input.value = "";
    return;
  }

  alert("Tá certa!!");

  input.disabled = true;
});
