import icon from "./assets/favicon-32x32.png";
import dice from "./assets/icon-dice.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";

import "./styles/reset.css";
import "./styles/style.css";

function generateAdvice() {
  console.log("advice");
  const adviceIDEl = document.querySelector(".advice-id");
  const quoteEl = document.querySelector(".quote");

  fetch("https://api.adviceslip.com/advice", {
    mode: "cors",
  })
    .then((res) => res.json())
    .then((res) => {
      adviceIDEl.textContent = `ADVICE #${res.slip.id}`;
      quoteEl.textContent = res.slip.advice;
    });
}

generateAdvice();

const dividerEl = document.querySelector(".divider");
dividerEl.src = dividerMobile;

const diceEl = document.querySelector(".dice");
diceEl.src = dice;

const diceContainer = document.querySelector(".dice-container");
diceContainer.addEventListener("click", () => generateAdvice());
