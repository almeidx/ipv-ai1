const first = document.getElementById("first");
const op = document.getElementById("op");
const second = document.getElementById("second");
const form = document.querySelector("form");
const result = document.getElementById("result");
const resultContainer = document.getElementById("result-container");
const submitBtn = document.querySelector("form > button[type=submit]");

const opMap = {
  add: "+",
  sub: "-",
  mult: "*",
  divide: "/",
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  calculate(() => {
    const firstValue = Number.parseFloat(first.value);
    const secondValue = Number.parseFloat(second.value);

    return `${firstValue} ${opMap[op.value]} ${secondValue}`;
  });
});

function calculate(equationFactory) {
  resultContainer.textContent = "A calcular a sua operação...";
  result.textContent = "";
  submitBtn.disabled = true;

  setTimeout(() => {
    const resultado = eval(equationFactory());

    resultContainer.textContent = "O resultado da sua conta é =";
    result.textContent = resultado;
    submitBtn.disabled = false;
  }, 3_000);
}
