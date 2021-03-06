const formInputIntro = document.querySelector("#input-intro");
const formInputFooter = document.querySelector("#input-footer");
const buttonTextIntro = document.querySelector("#button-text-intro");
const buttonImgIntro = document.querySelector("#img-intro");
const buttonTextFooter = document.querySelector("#button-text-footer");
const buttonImgFooter = document.querySelector("#img-footer");
const form = document.querySelectorAll(".form");

function changeButton(input, buttonText, buttonImg) {
  if (
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      input.value
    )
  ) {
    buttonText.textContent = "Круто, спасибо задоверие!";
    if (window.screen.width > 720) buttonImg.style.display = "none";
  }
}

formInputIntro.addEventListener("input", () => {
  changeButton(formInputIntro, buttonTextIntro, buttonImgIntro);
});

formInputFooter.addEventListener("input", () => {
  changeButton(formInputFooter, buttonTextFooter, buttonImgFooter);
});

form.forEach((element) => {
  element.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
