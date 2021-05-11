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

// -------- API Call --------
async function getdata(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  addquestion(data);
}

// --------- Adding Question ------
var question_no = 1;

const main_question = document.querySelector(".main-question");
const options = document.querySelector(".options");





const addquestion = (data) => {
  if (data) {
    main_question.innerHTML =
      question_no + "). " + data[question_no - 1].question;

    if (data[question_no - 1].answers.answer_a !== null) {
      const opbtn1 = document.createElement("button");
      opbtn1.innerText = data[question_no - 1].answers.answer_a;
      opbtn1.classList.add("option-1");
      options.appendChild(opbtn1);
    }

    if (data[question_no - 1].answers.answer_b !== null) {
      const opbtn2 = document.createElement("button");
      opbtn2.innerText = data[question_no - 1].answers.answer_b;
      opbtn2.classList.add("option-2");
      options.appendChild(opbtn2);
    }

    if (data[question_no - 1].answers.answer_c !== null) {
      const opbtn3 = document.createElement("button");
      opbtn3.innerText = data[question_no - 1].answers.answer_c;
      opbtn3.classList.add("option-3");
      options.appendChild(opbtn3);
    }

    if (data[question_no - 1].answers.answer_d !== null) {
      const opbtn4 = document.createElement("button");
      opbtn4.innerText = data[question_no - 1].answers.answer_d;
      opbtn4.classList.add("option-4");
      options.appendChild(opbtn4);
    }
  }
};


