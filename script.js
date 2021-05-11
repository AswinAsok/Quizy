const nextbtn = document.querySelector(".nextbtn");
const rulescontainer = document.querySelector(".rules-container");

const hideheader = () => {
  nextbtn.parentElement.parentElement.classList.add("hide");
  rulescontainer.classList.remove("hide");
};

nextbtn.addEventListener("click", hideheader);

const startbtn = document.querySelector(".startbtn");
const questionscontainer = document.querySelector(".questions-container");
const api_url = `https://quizapi.io/api/v1/questions?apiKey=VAa9sQhkjH5GUnCLeqG3xTo4rqUEz7Z0gFhi0ZaX&limit=10&tags=javascript`;

const hiderules = () => {
  startbtn.parentElement.parentElement.parentElement.classList.add("hide");
  questionscontainer.classList.remove("hide");
};
getdata(api_url);
startbtn.addEventListener("click", hiderules);

var question_number = 0;

// -------- API Call --------
async function getdata(url) {
  const response = await fetch(url);
  question_number += 1;
  var data = await response.json();
  console.log(data);
  addquestion(data, question_number);
}

// --------- Adding Question ------

const addquestion = (data, index) => {
  const questions_container = document.querySelector(".questions-container");

  const question_box = document.createElement("div");
  question_box.classList.add("question-box");
  questions_container.appendChild(question_box);

  const questions = document.createElement("div");
  questions.classList.add("questions");
  question_box.appendChild(questions);

  if (data) {
    const main_question = document.createElement("p");
    main_question.classList.add("main-question");
    questions.appendChild(main_question);

    const options = document.createElement("div");
    options.classList.add("options");
    questions.appendChild(options);

    main_question.innerHTML = index + "). " + data[index - 1].question;

    if (data[index - 1].answers.answer_a !== null) {
      const opbtn1 = document.createElement("button");
      opbtn1.innerText = data[index - 1].answers.answer_a;
      opbtn1.classList.add("option-1");
      options.appendChild(opbtn1);
    }

    if (data[index - 1].answers.answer_b !== null) {
      const opbtn2 = document.createElement("button");
      opbtn2.innerText = data[index - 1].answers.answer_b;
      opbtn2.classList.add("option-2");
      options.appendChild(opbtn2);
    }

    if (data[index - 1].answers.answer_c !== null) {
      const opbtn3 = document.createElement("button");
      opbtn3.innerText = data[index - 1].answers.answer_c;
      opbtn3.classList.add("option-3");
      options.appendChild(opbtn3);
    }

    if (data[index - 1].answers.answer_d !== null) {
      const opbtn4 = document.createElement("button");
      opbtn4.innerText = data[index - 1].answers.answer_d;
      opbtn4.classList.add("option-4");
      options.appendChild(opbtn4);
    }

    const next_question = document.createElement("div");
    next_question.classList.add("next-question");
    questions_container.appendChild(next_question);

    const nextq_btn = document.createElement("button");
    nextq_btn.classList.add("nextq-btn");
    nextq_btn.innerText = "Next Question";
    nextq_btn.onclick = nextquestion;
    next_question.appendChild(nextq_btn);
  }
};

const nextquestion = () => {
  getdata(api_url);
  const questions_container = document.querySelector(".questions-container");
  questions_container.innerHTML = "";
};
