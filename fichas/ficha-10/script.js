const first = document.getElementById("first");
const op = document.getElementById("op");
const second = document.getElementById("second");
const form = document.querySelector("form");
const result = document.getElementById("result");
const resultContainer = document.getElementById("result-container");
const submitBtn = document.querySelector("form > button[type=submit]");
const itemsContainer = document.getElementById("items");

const opMap = {
  add: "+",
  sub: "-",
  mult: "*",
  divide: "/",
};

const items = localStorage.getItem("items");
if (items) {
  const parsedItems = JSON.parse(items);
  for (const item of parsedItems) {
    addItemToList(item);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  calculate(() => {
    return new Promise((resolve, reject) => {
      const firstValue = Number.parseFloat(first.value);
      const secondValue = Number.parseFloat(second.value);

      if (!(op.value in opMap)) {
        reject("Operação inválida");
        return;
      }

      resolve(`${firstValue} ${opMap[op.value]} ${secondValue}`);
    });
  });
});

function calculate(equationFactory) {
  resultContainer.textContent = "A calcular a sua operação...";
  result.textContent = "";
  submitBtn.disabled = true;

  setTimeout(async () => {
    let resultado, equation;
    try {
      equation = await equationFactory();
      resultado = eval(equation);
    } catch (error) {
      resultContainer.textContent = "Erro";
      submitBtn.disabled = false;
    } finally {
      if (resultado) {
        resultContainer.textContent = "O resultado da sua conta é =";
        result.textContent = resultado;
        submitBtn.disabled = false;

        const item = `${equation} = ${resultado}`;
        appendToLocalStorage(item);
        addItemToList(item);
      }
    }
  }, 3_000);
}

function addItemToList(result) {
  const li = document.createElement("li");
  li.textContent = result;
  itemsContainer.appendChild(li);
}

function appendToLocalStorage(result) {
  const items = JSON.parse(localStorage.getItem("items") ?? "[]");
  items.push(result);
  localStorage.setItem("items", JSON.stringify(items));
}
