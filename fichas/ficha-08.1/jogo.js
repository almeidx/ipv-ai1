const inputs = document.querySelectorAll("li > input[type=radio]");
const form = document.querySelector("form");
let points = 0;

const answers = [null, null, null, null, null];

for (const input of inputs) {
  input.addEventListener("click", (e) => {
    const [questionIdx, answerIdx] = e.target.id
      .split("-")
      .slice(1)
      .map((n) => Number.parseInt(n, 10));

    /** @type {HTMLOListElement} */
    const ol = e.target.parentElement;

    const correctIdx = Number.parseInt(ol.parentElement.dataset.correct, 10);
    const isCorrect = correctIdx === answerIdx;

    if (isCorrect) {
      points += 5;
    } else {
      points = Math.max(0, points - 2);
    }

    answers[questionIdx] = isCorrect;

    const innerInputs = document.querySelectorAll(
      `section[data-idx="${questionIdx}"] li > input[type=radio]`
    );
    for (const [idx, innerInput] of innerInputs.entries()) {
      if (idx === correctIdx) {
        innerInput.parentElement.style.backgroundColor = "lightgreen";
      } else {
        innerInput.parentElement.style.backgroundColor = "tomato";
      }
      innerInput.disabled = true;
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (answers.includes(null)) {
    alert("Há perguntas por responder.");
    return;
  }

  if (confirm(`Pontos: ${points}. Quer voltar a jogar?`)) {
    window.location.reload();
  }
});

// const questionText = document.getElementById("question-text");
// const questionTitle = document.querySelector("section > h2");
// const answerList = document.getElementById("answers");
// const form = document.querySelector("form");
// const correctText = document.getElementById("correct");
// const previousButton = document.getElementById("previous-btn");
// const nextButton = document.getElementById("next-btn");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (questions.some((q) => q.selected === null)) {
//     alert("Há perguntas por responder.");
//     return;
//   }

//   if (confirm(`Pontos: ${points}. Quer voltar a jogar?`)) {
//     window.location.reload();
//   }
// });

// renderQuestion();

// for (const input of inputs) {
//   input.addEventListener("click", (e) => {
//     e.preventDefault();

//     const answerValue = parseInt(input.value, 10);
//     const question = questions[idx];

//     const isCorrect = answerValue === question.correct;

//     if (isCorrect) {
//       correctText.style.display = "block";
//     } else {
//       correctText.style.display = "none";
//     }

//     updatePoints(isCorrect);

//     question.selected = answerValue;

//     validateAnswer(inputs, answerValue, question.correct);
//   });
// }

// function validateAnswer(inputs, selected, correct) {
//   inputs.forEach((input) => (input.disabled = true));

//   const items = document.querySelectorAll("#answers > li");

//   if (selected === correct) {
//     items[selected].style.backgroundColor = "lightgreen";
//   } else {
//     for (const [i, answer] of items.entries()) {
//       answer.style.backgroundColor = correct === i ? "lightgreen" : "tomato";
//     }
//   }
// }

// function nextQuestion() {
//   idx++;
//   if (idx === questions.length - 1) {
//     nextButton.disabled = true;
//     previousButton.disabled = false;
//   } else {
//     nextButton.disabled = false;
//     previousButton.disabled = false;
//   }

//   renderQuestion();
// }

// function prevQuestion() {
//   idx--;
//   if (idx === 0) {
//     previousButton.disabled = true;
//     nextButton.disabled = false;
//   } else {
//     previousButton.disabled = false;
//     nextButton.disabled = false;
//   }

//   renderQuestion();
// }

// function updatePoints(isCorrect) {
//   if (isCorrect) {
//     points += 5;
//   } else {
//     points -= 2;
//     if (points < 0) points = 0;
//   }
// }
