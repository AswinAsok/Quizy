const nextbtn = document.querySelector(".nextbtn");
const rulescontainer = document.querySelector(".rules-container")

const hide = () => {
  nextbtn.parentElement.parentElement.classList.add("hide")
  rulescontainer.classList.remove("hide")
};

nextbtn.addEventListener("click", hide);
