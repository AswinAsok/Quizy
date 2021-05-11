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
  getdata(api_url);
};

startbtn.addEventListener("click", hiderules);

// -------- API Call --------
async function getdata(url) {
  const response = await fetch(url);

  var data = await response.json();

  addquestion(data);
}

// --------- Adding Question ------
var question_no = 1;
const main_question = document.querySelector(".main-question");
const addquestion = (data) => {
  if (data) {
    main_question.innerHTML = data[question_no].question;
  }
};
