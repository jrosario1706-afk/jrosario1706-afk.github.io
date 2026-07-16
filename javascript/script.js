const impactButton = document.getElementById('btn-impacto');
const impactBox = document.querySelector('.impact-box');
const impactMessages = [
  'La contaminación del aire puede debilitar la capa de ozono y aumentar la exposición a rayos UV peligrosos.',
  'Las emisiones contaminantes contribuyen al calentamiento global y alteran el equilibrio climático.',
  'El aire sucio afecta la salud respiratoria y provoca enfermedades cardiovasculares.',
  'Reducir emisiones ayuda a proteger el clima, la fauna y los recursos naturales.',
];
let impactIndex = 0;

const questions = [
  {
    question: '¿Qué protege la capa de ozono?',
    options: ['La lluvia', 'Los rayos ultravioletas peligrosos', 'El fuego'],
    answer: 'Los rayos ultravioletas peligrosos',
  },
  {
    question: '¿Cuál acción reduce la contaminación?',
    options: ['Usar transporte público', 'Quemar basura', 'Dejar luces encendidas'],
    answer: 'Usar transporte público',
  },
  {
    question: '¿Qué beneficios trae plantar árboles?',
    options: ['Mejora el aire y captura carbono', 'Aumenta la contaminación', 'Reduce la lluvia'],
    answer: 'Mejora el aire y captura carbono',
  },
  {
    question: '¿Qué gas es muy contaminante?',
    options: ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno'],
    answer: 'Dióxido de carbono',
  },
  {
    question: '¿Qué vehículo genera menos contaminación?',
    options: ['Moto de gasolina', 'Caminata', 'Auto grande'],
    answer: 'Caminata',
  },
];

let currentQuestion = 0;
let score = 0;
const questionText = document.getElementById('quiz-question');
const optionsBox = document.getElementById('quiz-options');
const feedback = document.getElementById('quiz-feedback');
const scoreText = document.createElement('p');
scoreText.id = 'quiz-score';
optionsBox.insertAdjacentElement('afterend', scoreText);

function renderQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  optionsBox.innerHTML = '';
  scoreText.textContent = `Puntaje: ${score} / ${questions.length}`;

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-button';
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option, button));
    optionsBox.appendChild(button);
  });
}

function checkAnswer(selected, button) {
  const question = questions[currentQuestion];
  const allButtons = optionsBox.querySelectorAll('button');

  if (selected === question.answer) {
    score += 1;
    feedback.textContent = 'Correcto. ¡Buena decisión para el planeta!';
    button.style.borderColor = 'rgba(108, 230, 192, 0.9)';
  } else {
    feedback.textContent = `Incorrecto. La respuesta correcta es: ${question.answer}`;
    button.style.borderColor = 'rgba(255, 143, 143, 0.9)';
  }

  allButtons.forEach((item) => item.disabled = true);
  currentQuestion += 1;

  if (currentQuestion >= questions.length) {
    setTimeout(showFinalResult, 800);
  } else {
    setTimeout(() => {
      feedback.textContent = '';
      renderQuestion();
    }, 900);
  }
}

function showFinalResult() {
  questionText.textContent = '¡Quiz completo!';
  optionsBox.innerHTML = '';
  feedback.textContent = `Terminaste. Obtuviste ${score} de ${questions.length}.`;
  scoreText.textContent = '';

  const restartButton = document.createElement('button');
  restartButton.type = 'button';
  restartButton.className = 'button-primary';
  restartButton.textContent = 'Volver a intentar';
  restartButton.addEventListener('click', restartQuiz);
  optionsBox.appendChild(restartButton);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  feedback.textContent = '';
  renderQuestion();
}

impactButton.addEventListener('click', () => {
  impactBox.innerHTML = `<strong>Impacto clave:</strong> ${impactMessages[impactIndex]}`;
  impactIndex = (impactIndex + 1) % impactMessages.length;
});

renderQuestion();
