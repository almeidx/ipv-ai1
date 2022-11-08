const first = document.getElementById("first");
const second = document.getElementById("second");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const result = document.getElementById("result");

mul.addEventListener("click", (event) => {
  const numbers = parseNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;

  result.innerText = `${n1 * n2}`;
});

div.addEventListener("click", (event) => {
  const numbers = parseNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;

  if (n2 === 0) {
    result.innerText = "ERR! Divisão por 0";
    return;
  }

  result.innerText = `${n1 / n2}`;
});

function parseNumbers() {
  if (!first.value.length || !second.value.length) {
    result.innerText = "ERR! Um dos números não está preenchido";
    return null;
  }

  const n1 = parseInt(first.value, 10);
  const n2 = parseInt(second.value, 10);

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    result.innerText = "ERR! Números inválidos";
    return null;
  }

  return [n1, n2];
}
