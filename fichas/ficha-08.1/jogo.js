const questions = [
  {
    question:
      "No planejamento da construção de um website, um web designer, após reuniões com o cliente, analisou os possíveis caminhos e processos que os usuários empreenderiam durante sua navegação por entre as páginas, incluindo aí as barreiras para checagem de credenciais ou entrada de parâmetros que algumas páginas iriam requerer. Esse tipo de informação é mais adequadamente representado, na forma gráfica, através de qual recurso de web design?",

    answers: [
      "Mapa de Fluxo",
      "Mapa do Site",
      "Responsividade",
      "Meta tags",
      "Programação web",
    ],
    correct: 1,
    selected: null,
  },

  {
    question:
      "Em desenvolvimento web, mais especificamente em PHP é possível realizar uma autenticação de usuário para que saber tudo o que foi feito pelo usuário logado dentro de nosso sistema, entre outras coisas. Qual recurso em PHP permite fazer isso?",

    answers: ["Variables", "Session", "Functions", "Generators", "Fibers"],
    correct: 1,
    selected: null,
  },

  {
    question:
      "O modelo padrão para intercâmbio de dados na web conhecido como resource description framework (RDF) facilita a mesclagem de dados, mesmo que os esquemas subjacentes sejam diferentes, permitindo a evolução dos esquemas ao longo do tempo, sem a obrigatoriedade que todos os consumidores dos dados sejam alterados.",

    answers: ["Certo", "Errado"],
    correct: 1,
    selected: null,
  },

  {
    question:
      "No contexto das aplicações web, Ajax é uma tecnologia que destina-se primordialmente a:",

    answers: [
      "Criptografar dados que são transmitidos pela rede",
      "Enviar e receber dados do servidor sem precisar recarregar a página inteira",
      "Evitar ataques por meio de aplicativo web",
      "Implementar mecanismos de login de duas etapas",
      "Controlar aplicativos web que operam em diferentes plataformas",
    ],
    correct: 1,
    selected: null,
  },

  {
    question:
      "Considere as seguintes afirmativas a respeito da técnica AJAX usada no desenvolvimento de aplicações para web.\
		\
		I. AJAX significa Asynchronous JavaScript and XML.\
		II. A resposta de uma requisição HTTP que utilize AJAX deve conter, obrigatoriamente, dados no formato XML.\
		III. Requisições HTTP que utilizam AJAX sempre serão assíncronas.\
		\
		Assinale a alternativa CORRETA.",

    answers: [
      "Todas as afirmativas estão corretas",
      "Nenhuma das afirmativas está correta",
      "Somente as afirmativas I e II estão corretas",
      "Somente as afirmativas II e III estão corretas",
      "Somente a afirmativa I está correta",
    ],
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

  if (questions[idx].selected === null) {
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
