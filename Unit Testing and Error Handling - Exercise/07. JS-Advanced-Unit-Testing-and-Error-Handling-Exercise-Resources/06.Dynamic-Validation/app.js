function validate() {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("change", onChange);
  const regex = /^[a-z]+@[a-z]+\.[a-z]+/gm;

  function onChange(e) {
    const emailInputValue = emailInput.value;
    let borderError = regex.test(emailInputValue);
    if (!borderError) {
      emailInput.classList = "error";
    } else {
      emailInput.classList.remove("error");
    }
  }
}
