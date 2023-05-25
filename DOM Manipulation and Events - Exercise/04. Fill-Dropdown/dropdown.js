function addItem() {
  // Capture elements.
  const inputTextElement = document.getElementById("newItemText");
  const inputValueElement = document.getElementById("newItemValue");
  const menu = document.getElementById("menu");

  //   Create elements.
  const optionElement = document.createElement("option");

  //   Setup Option.
  optionElement.textContent = inputTextElement.value;
  optionElement.value = inputValueElement.value;

  //   Append to menu.
  menu.appendChild(optionElement);

  //    Clear.
  inputTextElement.value = "";
  inputValueElement.value = "";
}
