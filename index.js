"use-strict";

const input = document.getElementById("input");
const button = document.querySelector(".btn");
const erroMsg = document.querySelector(".span");

const mobileMedia = window.matchMedia("(max-width:375px)");

const checkMobileMedia = () => {
  if (mobileMedia.matches) button.style.margin = "20px";
};

const addErrorMessageAndStyle = (message) => {
  erroMsg.innerHTML = message;
  erroMsg.classList.add("error-msg");
  input.style.border = "1px solid hsl(354, 100%, 66%)";
};

const checkMailFormat = (e) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.value === "") {
    checkMobileMedia();
    addErrorMessageAndStyle(
      "Whoops! It looks like you forgot to add your email"
    );
    e.preventDefault();
  } else if (!input.value.match(mailFormat)) {
    checkMobileMedia();
    addErrorMessageAndStyle("Please provide a valid email address");
    e.preventDefault();
    input.focus();
  } else {
    input.focus();
  }
};

button.addEventListener("click", checkMailFormat);
