const formInputIntro = document.querySelector("#input-intro");
const formInputFooter = document.querySelector("#input-footer");
const buttonTextIntro = document.querySelector("#button-text-intro");
const buttonImgIntro = document.querySelector("#img-intro");
const buttonTextFooter = document.querySelector("#button-text-footer");
const buttonImgFooter = document.querySelector("#img-footer");

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

formInputIntro.addEventListener("keyup", () => {
  changeButton(formInputIntro, buttonTextIntro, buttonImgIntro);
});

formInputFooter.addEventListener("keyup", () => {
  changeButton(formInputFooter, buttonTextFooter, buttonImgFooter);
});
