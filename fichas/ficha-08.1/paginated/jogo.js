const questions = [
  {
    question: "O que significa a sigla HTML?",

    answers: [
      "Hyperlinks and Text Markup Language",
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    correct: 1,
    selected: null,
  },

  {
    question: "Qual das alternativas abaixo não é um elemento de HTML?",

    answers: ["div", "p", "ei", "span"],
    correct: 2,
    selected: null,
  },

  {
    question:
      "Qual das alternativas abaixo não é um atributo válido para o elemento img?",

    answers: ["src", "href", "alt", "title"],
    correct: 3,
    selected: null,
  },

  {
    question: "O que significa a sigla CSS?",

    answers: [
      "Cascading Style Sheets",
      "Counter-Strike: Source",
      "Catholic Social Services",
      "Cross Site Scripting",
    ],
    correct: 0,
    selected: null,
  },

  {
    question: "Quanto é 1 + 1?",

    answers: ["1", "2", "3", "473"],
    correct: 1,
    selected: null,
  },
];

const questionText = document.getElementById("question-text");
const questionTitle = document.querySelector("section > h2");
const answerList = document.getElementById("answers");
const form = document.querySelector("form");
const correctText = document.getElementById("correct");
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
let idx = 0;
let points = 0;

nextButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (idx === questions.length - 1) return;

  nextQuestion();
});

previousButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (idx === 0) return;

  prevQuestion();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (questions.some((q) => q.selected === null)) {
    alert("Há perguntas por responder.");
    return;
  }

  if (confirm(`Pontos: ${points}. Quer voltar a jogar?`)) {
    window.location.reload();
  }
});

renderQuestion();

function renderQuestion() {
  const question = questions[idx];

  questionTitle.textContent = `Questão ${idx + 1}`;
  questionText.innerText = question.question;

  answerList.innerHTML = question.answers
    .map((answer, i) => {
      return `<li>
			<input type="radio" name="answer" id="answer-${i}" value="${i}" />
			<label for="answer-${i}">${answer}</label>
			</li>`.trim();
    })
    .join("");

  if (question.selected !== null) {
    validateAnswer(
      document.querySelectorAll("#answers > li > input"),
      question.selected,
      question.correct
    );
  } else {
    correctText.style.display = "none";
  }

  const inputs = document.querySelectorAll("#answers > li input");

  for (const input of inputs) {
    input.addEventListener("click", (e) => {
      e.preventDefault();

      const answerValue = parseInt(input.value, 10);
      const question = questions[idx];

      const isCorrect = answerValue === question.correct;

      if (isCorrect) {
        correctText.style.display = "block";
      } else {
        correctText.style.display = "none";
      }

      updatePoints(isCorrect);

      question.selected = answerValue;

      validateAnswer(inputs, answerValue, question.correct);
    });
  }
}

function validateAnswer(inputs, selected, correct) {
  inputs.forEach((input) => (input.disabled = true));

  const items = document.querySelectorAll("#answers > li");

  if (selected === correct) {
    items[selected].style.backgroundColor = "lightgreen";
  } else {
    for (const [i, answer] of items.entries()) {
      answer.style.backgroundColor = correct === i ? "lightgreen" : "tomato";
    }
  }
}

function nextQuestion() {
  idx++;
  if (idx === questions.length - 1) {
    nextButton.disabled = true;
    previousButton.disabled = false;
  } else {
    nextButton.disabled = false;
    previousButton.disabled = false;
  }

  renderQuestion();
}

function prevQuestion() {
  idx--;
  if (idx === 0) {
    previousButton.disabled = true;
    nextButton.disabled = false;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }

  renderQuestion();
}

function updatePoints(isCorrect) {
  if (isCorrect) {
    points += 5;
  } else {
    points -= 2;
    if (points < 0) points = 0;
  }
}
