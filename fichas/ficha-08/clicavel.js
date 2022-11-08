const stateButton = document.getElementById("state");
const dayOfTheWeekButton = document.getElementById("dia");

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

let state = false;
let day = -1;

stateButton.addEventListener("click", () => {
  state = !state;

  alert(state ? "verdadeiro" : "falso");
});

dayOfTheWeekButton.addEventListener("click", () => {
  day++;
  if (day > 6) day = 0;

  let text = days[day];
  // if (day === 0) {
  //   text = "Domingo";
  // } else if (day === 1) {
  //   text = "Segunda";
  // } else if (day === 2) {
  //   text = "Terça";
  // } else if (day === 3) {
  //   text = "Quarta";
  // } else if (day === 4) {
  //   text = "Quinta";
  // } else if (day === 5) {
  //   text = "Sexta";
  // } else if (day === 6) {
  //   text = "Sábado";
  // }

  dayOfTheWeekButton.textContent = text;
});
