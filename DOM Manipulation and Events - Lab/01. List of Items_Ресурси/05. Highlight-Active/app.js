function focused() {
  let input = document.querySelectorAll("input");
  let inputArr = Array.from(input);

  inputArr.forEach((x) => {
    x.addEventListener("focus", focusHandler);
    x.addEventListener("blur", blurHandler);
  });

  function focusHandler(e) {
    let element = e.target;
    let div = element.parentElement;
    div.classList.add("focused");
  }
  function blurHandler(e) {
    let element = e.target;
    let div = element.parentElement;
    div.classList.remove("focused");
  }
}
