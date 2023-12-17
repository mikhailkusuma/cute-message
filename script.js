const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Let's prepared we to go!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Set Background
  document.querySelector('body').style.backgroundImage = 'none';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector(".btn-group").style.display = 'none';
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});