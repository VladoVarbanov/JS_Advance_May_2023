window.addEventListener("load", solve);

function solve() {
  //Taking DOM elements.
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const addButton = document.getElementById("add");
  const formData = {};
  const tBody = document.getElementById("furniture-list");
  const totalPriceEl = document.querySelector(".total-price");
  let totalPrice = 0;

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    collectDataInput();

    if (validateData(formData)) {
      createElements(formData);
      clearText();
    }
  });

  //Taking DOM elements value.
  function collectDataInput() {
    const modelInputValue = modelInput.value;
    const yearInputValue = Number(yearInput.value);
    const descriptionInputValue = descriptionInput.value;
    const priceInputValue = Number(priceInput.value);
    formData.model = modelInputValue;
    formData.year = yearInputValue;
    formData.description = descriptionInputValue;
    formData.price = priceInputValue.toFixed(2);
    return formData;
  }

  //Check DOM elements value if they are with correct value.
  function validateData(data) {
    if (data.model === "") {
      return false;
    }
    if (data.year < 0) {
      return false;
    }
    if (data.description === "") {
      return false;
    }
    if (data.price < 0) {
      return false;
    }
    return true;
  }

  function createElements(data) {
    const trInfoEl = document.createElement("tr");
    trInfoEl.classList = "info";
    const tdModelEl = document.createElement("td");
    const tdPriceEl = document.createElement("td");
    const tdBtnsEl = document.createElement("td");
    const BtnInfoEl = document.createElement("button");
    BtnInfoEl.classList = "moreBtn";
    const BtnBuyEl = document.createElement("button");
    BtnBuyEl.classList = "buyBtn";
    const trHideEl = document.createElement("tr");
    trHideEl.classList = "hide";
    trHideEl.style.display = "none";
    const tdYearEl = document.createElement("td");
    const tdDescriptionEl = document.createElement("td");
    tdDescriptionEl.colSpan = "3";

    // Input textContent.
    tdModelEl.textContent = data.model;
    tdPriceEl.textContent = data.price;
    BtnInfoEl.textContent = "More Info";
    BtnBuyEl.textContent = "Buy it";
    tdYearEl.textContent = `Year: ${data.year}`;
    tdDescriptionEl.textContent = `Description: ${data.description}`;

    tBody.appendChild(trInfoEl);
    trInfoEl.appendChild(tdModelEl);
    trInfoEl.appendChild(tdPriceEl);
    trInfoEl.appendChild(tdBtnsEl);
    tdBtnsEl.appendChild(BtnInfoEl);
    tdBtnsEl.appendChild(BtnBuyEl);
    tBody.appendChild(trHideEl);
    trHideEl.appendChild(tdYearEl);
    trHideEl.appendChild(tdDescriptionEl);

    BtnInfoEl.addEventListener("click", (e) => {
      if (BtnInfoEl.textContent === "More Info") {
        BtnInfoEl.textContent = "Less Info";
        trHideEl.style.display = "contents";
      } else {
        BtnInfoEl.textContent = "More Info";
        trHideEl.style.display = "none";
      }
    });

    BtnBuyEl.addEventListener("click", (e) => {
      totalPrice += Number(tdPriceEl.textContent);
      totalPriceEl.textContent = totalPrice.toFixed(2);
      trInfoEl.remove();
    });
  }

  function clearText() {
    modelInput.value = "";
    yearInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
  }
}
