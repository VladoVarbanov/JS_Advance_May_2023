window.addEventListener("load", solve);

function solve() {
  // Taking DOM Elements.
  const carModelInput = document.getElementById("car-model");
  const carYearInput = document.getElementById("car-year");
  const partNameInput = document.getElementById("part-name");
  const partNumberInput = document.getElementById("part-number");
  const conditionInput = document.getElementById("condition");
  const nextBtn = document.getElementById("next-btn");
  const partInfoUl = document.getElementsByClassName("info-list");
  const confirmListUl = document.getElementsByClassName("confirm-list");

  // Input Value.

  let carModelInputValue = "";
  let carYearInputValue = "";
  let partNameInputValue = "";
  let partNumberInputValue = "";
  let conditionInputValue = "";

  nextBtn.addEventListener("click", takeInputValue);

  // Set Input Value.
  function takeInputValue(e) {
    e.preventDefault();
    if (validateInput()) {
      carModelInputValue = carModelInput.value;
      carYearInputValue = carYearInput.value;
      partNameInputValue = partNameInput.value;
      partNumberInputValue = partNumberInput.value;
      conditionInputValue = conditionInput.value;
      nextBtnValue = nextBtn.value;
    }
    createPartInfoElement();
  }

  // Validate Input data.
  function validateInput() {
    if (
      carModelInput.value !== "" &&
      carYearInput.value !== "" &&
      partNameInput.value !== "" &&
      conditionInput.value !== "" &&
      partNumberInput.value !== "" &&
      Number(carYearInput.value) >= 1980 &&
      Number(carYearInput.value) <= 2023
    ) {
      return true;
    }

    return false;
  }

  // Creating HTML element and attached to DOM three.
  function createPartInfoElement(e) {
    // Creating HTML elements
    const partContentLiEl = document.createElement("li");
    const articleEl = document.createElement("article");
    const carModelPEl = document.createElement("p");
    const carYearPEl = document.createElement("p");
    const partNamePEl = document.createElement("p");
    const partNumberPEl = document.createElement("p");
    const conditionPEl = document.createElement("p"); // need to insert text Condition:
    const editBtnEl = document.createElement("button");
    const continueBtnEl = document.createElement("button");

    // Insert textContent to HTML elements.
    partContentLiEl.classList.add("part-content");
    carModelPEl.textContent = `Car Model: ${carModelInputValue}`;
    carYearPEl.textContent = `Car Year: ${carModelInputValue}`;
    partNamePEl.textContent = `Part Name: ${partNameInputValue}`;
    partNumberPEl.textContent = `Part Number: ${partNumberInputValue}`;
    conditionPEl.textContent = `Condition: ${conditionInputValue}`;
    editBtnEl.textContent = "Edit";
    editBtnEl.classList.add("edit-btn");
    continueBtnEl.textContent = "Continue";
    continueBtnEl.classList.add("continue-btn");

    // Add Event Listener to two buttons.
    editBtnEl.addEventListener("click", editBtn);
    continueBtnEl.addEventListener("click", continueBtn);

    // Making HTML three.
    partContentLiEl.appendChild(articleEl);
    articleEl.appendChild(carModelPEl);
    articleEl.appendChild(carYearPEl);
    articleEl.appendChild(partNamePEl);
    articleEl.appendChild(partNumberPEl);
    articleEl.appendChild(conditionPEl);
    partContentLiEl.appendChild(editBtnEl);
    partContentLiEl.appendChild(continueBtnEl);

    // Attach new HTML three to DOM three.
    partInfoUl[0].appendChild(partContentLiEl);

    clearInput();
    nextBtn.disabled = true;
  }

  // Clear the submit form.
  function clearInput() {
    carModelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionInput.value = "";
  }

  // Edit button.
  function editBtn() {
    carModelInput.value = carModelInputValue;
    carYearInput.value = carYearInputValue;
    partNameInput.value = partNameInputValue;
    partNumberInput.value = partNumberInputValue;
    conditionInput.value = conditionInputValue;
    const removableLi = document.querySelector(".part-content");
    removableLi.remove();
    nextBtn.disabled = false;
  }

  function continueBtn() {
    const removableLi = document.querySelector(".part-content");
    const editBtnRemove = document.querySelector(".edit-btn");
    const continueBtnRemove = document.querySelector(".continue-btn");
    editBtnRemove.remove();
    continueBtnRemove.remove();
    removableLi.remove();
    const confirmBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.classList.add("confirm-btn");
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancel-btn");
    removableLi.appendChild(confirmBtn);
    removableLi.appendChild(cancelBtn);

    confirmBtn.addEventListener("click", () => {
      removableLi.remove();
      const img = document.getElementById("complete-img");
      const textP = document.getElementById("complete-text");
      textP.textContent = "Part is Ordered!";

      img.style.visibility = "visible";
      nextBtn.disabled = false;
    });

    cancelBtn.addEventListener("click", () => {
      removableLi.remove();
      nextBtn.disabled = false;
    });

    confirmListUl[0].appendChild(removableLi);
  }
}
