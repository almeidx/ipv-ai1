const labels = document.querySelectorAll("label");
const div = document.querySelector("div");

for (const label of labels) {
  label.addEventListener("mouseover", (event) => {
    div.style.backgroundColor = event.target.textContent;
  });

  label.addEventListener("mouseout", (event) => {
    div.style.backgroundColor = "unset";
  });
}
