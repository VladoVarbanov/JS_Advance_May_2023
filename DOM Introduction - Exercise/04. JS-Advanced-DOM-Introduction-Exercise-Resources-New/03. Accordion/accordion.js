function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let displayedText = document.getElementById("extra");
  if (button.textContent === "Less") {
    button.textContent = "More";
    displayedText.style.display = "none";
  } else {
    button.textContent = "Less";
    displayedText.style.display = "block";
  }
}
