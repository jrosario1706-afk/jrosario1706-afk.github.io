
const impactButton = document.getElementById('btn-impacto');
const impactBox = document.getElementById('impacto');
const impactMessages = [
  'La contaminación del aire puede debilitar la capa de ozono y aumentar la exposición a rayos UV peligrosos.',
  'Las emisiones contaminantes contribuyen al calentamiento global y alteran el equilibrio del clima.',
  'Respirar aire contaminado afecta la salud y puede agravar enfermedades respiratorias.'
];
let impactIndex = 0;

impactButton.addEventListener('click', () => {
  impactBox.innerHTML = `<strong>Impacto clave:</strong> ${impactMessages[impactIndex]}`;
  impactIndex = (impactIndex + 1) % impactMessages.length;
});

const questions = [
  {
    question: '¿Qué protege la capa de ozono?',
    options: ['La lluvia', 'Los rayos ultravioletas peligrosos', 'El fuego'],
    answer: 'Los rayos ultravioletas peligrosos'
  },
  {
    question: '¿Cuál de estas acciones ayuda a reducir la contaminación?',
    options: ['Usar transporte público', 'Quemar basura', 'Dejar luces encendidas'],
    answer: 'Usar transporte público'
  },
  {
    question: '¿Qué beneficio trae plantar árboles?',
    options: ['Aumenta la contaminación', 'Mejora el aire y captura carbono', 'Reduce la lluvia'],
    answer: 'Mejora el aire y captura carbono'
  },
  {
    question: '¿Qué gas es muy contaminante cuando se emite en exceso?',
    options: ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno'],
    answer: 'Dióxido de carbono'
  },
  {
    question: '¿Qué vehículo genera menos contaminación en ciudad?',
    options: ['Moto de gasolina', 'Caminata', 'Auto grande'],
    answer: 'Caminata'
  },
  {
    question: '¿Qué puede ayudar a limpiar el aire?',
    options: ['Fabricas sin filtros', 'Áreas verdes', 'Quemar plástico'],
    answer: 'Áreas verdes'
  },
  {
    question: '¿Por qué es importante la capa de ozono?',
    options: ['Porque produce lluvia', 'Porque protege de rayos UV', 'Porque calienta el suelo'],
    answer: 'Porque protege de rayos UV'
  },
  {
    question: '¿Cuál es una fuente importante de contaminación del aire?',
    options: ['El sol', 'Los coches y fábricas', 'La luna'],
    answer: 'Los coches y fábricas'
  },
  {
    question: '¿Qué acción ayuda al planeta en casa?',
    options: ['Dejar luces encendidas', 'Ahorrar energía', 'Tirar basura al suelo'],
    answer: 'Ahorrar energía'
  },
  {
    question: '¿Qué mensaje representa mejor el cuidado del aire?',
    options: ['Respirar mejor, vivir mejor', 'Más humo, más vida', 'Menos árboles, más polvo'],
    answer: 'Respirar mejor, vivir mejor'
  },
  {
    question: '¿Qué elemento natural ayuda a filtrar parte de la luz solar dañina?',
    options: ['La capa de ozono', 'La arena', 'El océano'],
    answer: 'La capa de ozono'
  },
  {
    question: '¿Cuál de estos problemas está relacionado con la contaminación ambiental?',
    options: ['Dolor de muelas', 'Cambio climático', 'Cansancio por ver televisión'],
    answer: 'Cambio climático'
  },
  {
    question: '¿Qué hábito diario puede mejorar la calidad del aire?',
    options: ['Quemar hojas', 'Reciclar', 'Usar aerosoles tóxicos'],
    answer: 'Reciclar'
  },
  {
    question: '¿Por qué es importante la ciencia para cuidar el ambiente?',
    options: ['Porque inventa problemas', 'Porque ayuda a entender y prevenir daños', 'Porque hace más humo'],
    answer: 'Porque ayuda a entender y prevenir daños'
  },
  {
    question: '¿Qué protege mejor a los seres humanos del exceso de radiación solar?',
    options: ['El plástico', 'La capa de ozono', 'Los edificios altos'],
    answer: 'La capa de ozono'
  }
];

let currentQuestion = 0;
let score = 0;
const questionText = document.getElementById('quiz-question');
const optionsBox = document.getElementById('quiz-options');
const feedback = document.getElementById('quiz-feedback');
const scoreText = document.createElement('p');
scoreText.id = 'quiz-score';
feedback.insertAdjacentElement('afterend', scoreText);

const badge = document.createElement('span');
badge.className = 'quiz-badge';
badge.textContent = 'Quiz divertido y educativo';
feedback.insertAdjacentElement('afterend', badge);

function renderQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  optionsBox.innerHTML = '';
  scoreText.textContent = `Puntaje: ${score} / ${questions.length}`;

  q.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsBox.appendChild(button);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    score += 1;
    feedback.textContent = 'Correcto. ¡Tu respuesta ayuda a cuidar el planeta!';
  } else {
    feedback.textContent = `Inténtalo otra vez. La respuesta correcta es: ${q.answer}`;
  }

  const buttons = optionsBox.querySelectorAll('button');
  buttons.forEach((button) => button.disabled = true);

  currentQuestion += 1;

  if (currentQuestion >= questions.length) {
    setTimeout(() => {
      questionText.textContent = 'Quiz completado';
      optionsBox.innerHTML = '';
      feedback.textContent = `Terminaste. Tu puntaje final fue ${score} de ${questions.length}.`;
      scoreText.textContent = '';
      badge.textContent = score === questions.length ? '¡Perfecto! Eres un defensor del planeta 🌍' : '¡Sigue aprendiendo y cuidando el aire!';

      const restartButton = document.createElement('button');
      restartButton.textContent = 'Volver a intentar';
      restartButton.addEventListener('click', restartQuiz);
      optionsBox.appendChild(restartButton);
    }, 1000);
  } else {
    setTimeout(renderQuestion, 1000);
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  feedback.textContent = '';
  scoreText.textContent = '';
  badge.textContent = 'Quiz divertido y educativo';
  renderQuestion();
}

renderQuestion();
