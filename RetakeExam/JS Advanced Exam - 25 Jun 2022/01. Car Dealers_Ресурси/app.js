window.addEventListener("load", solve);

function solve() {
  // Capture inputs
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");

  // Capture other elements.
  const publishBtn = document.getElementById("publish");
  const tbody = document.getElementById("table-body");
  const carsListUL = document.getElementById("cars-list");
  const profitEl = document.getElementById("profit");

  // Attach events.
  publishBtn.addEventListener("click", publish);

  // Callback.
  function publish(e) {
    e.preventDefault();

    const makeInputValue = makeInput.value;
    const modelInputValue = modelInput.value;
    const yearInputValue = yearInput.value;
    const fuelInputValue = fuelInput.value;
    const originalCostInputValue = Number(originalCostInput.value);
    const sellingPriceInputValue = Number(sellingPriceInput.value);

    if (
      !makeInputValue ||
      !modelInputValue ||
      !yearInputValue ||
      !fuelInputValue ||
      sellingPriceInputValue <= originalCostInputValue
    ) {
      return;
    }

    // tr
    const trEl = document.createElement("tr");
    trEl.classList.add("row");

    // td's
    const makeTdEl = document.createElement("td");
    makeTdEl.textContent = makeInputValue;

    const modelTdEl = document.createElement("td");
    modelTdEl.textContent = modelInputValue;

    const yearTdEl = document.createElement("td");
    yearTdEl.textContent = yearInputValue;

    const fuelTdEl = document.createElement("td");
    fuelTdEl.textContent = fuelInputValue;

    const originalCostTdEl = document.createElement("td");
    originalCostTdEl.textContent = originalCostInputValue;

    const sellingPriceTdEl = document.createElement("td");
    sellingPriceTdEl.textContent = sellingPriceInputValue;

    const buttonsTdEl = document.createElement("td");

    // Define buttons.
    const editBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";

    const sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn", "sell");
    sellBtn.textContent = "Sell";

    // Attach buttons to td.
    buttonsTdEl.appendChild(editBtn);
    buttonsTdEl.appendChild(sellBtn);

    // Attach created td's to the tr.
    trEl.appendChild(makeTdEl);
    trEl.appendChild(modelTdEl);
    trEl.appendChild(yearTdEl);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(originalCostTdEl);
    trEl.appendChild(sellingPriceTdEl);
    trEl.appendChild(buttonsTdEl);

    // Attach row to tbody.
    tbody.appendChild(trEl);

    // Clear.
    clearAll();

    // Inner callbacks.
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Map data.
      makeInput.value = makeInputValue;
      modelInput.value = modelInputValue;
      yearInput.value = yearInputValue;
      fuelInput.value = fuelInputValue;
      originalCostInput.value = originalCostInputValue;
      sellingPriceInput.value = sellingPriceInputValue;

      //Remove tr.
      trEl.remove();
    });

    sellBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Create li.
      const liEl = document.createElement("li");
      liEl.classList.add("each-list");

      // Create span's.
      const makeModelSpan = document.createElement("span");
      makeModelSpan.textContent = `${makeInputValue} ${modelInputValue}`;

      const yearSpan = document.createElement("span");
      yearSpan.textContent = yearInputValue;

      const priceSpan = document.createElement("span");
      priceSpan.textContent = sellingPriceInputValue - originalCostInputValue;

      // Attach spans to li.
      liEl.appendChild(makeModelSpan);
      liEl.appendChild(yearSpan);
      liEl.appendChild(priceSpan);

      // Attach li to ul (cars-list).
      carsListUL.appendChild(liEl);

      //Remove tr.
      trEl.remove();

      // Populate the profit.
      profitEl.textContent = (
        Number(profitEl.textContent) +
        sellingPriceInputValue -
        originalCostInputValue
      ).toFixed(2);
    });
  }

  function clearAll() {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";
  }
}
