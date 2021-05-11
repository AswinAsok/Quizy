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
  console.log(questionscontainer)
  getdata(api_url);
};

startbtn.addEventListener("click", hiderules);

// -------- API Call --------

async function getdata(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
}
