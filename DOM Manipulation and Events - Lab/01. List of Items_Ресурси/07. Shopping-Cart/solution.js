function solve() {
  let addButtons = document.querySelectorAll(".add-product");
  let addButtonsArr = Array.from(addButtons);
  let textArea = document.querySelector("textarea");
  let totalSum = 0;
  let products = {};
  let checkoutBtn = document.querySelector(".checkout");

  addButtonsArr.forEach((x) => x.addEventListener("click", addHandler));
  checkoutBtn.addEventListener("click", checkoutHandler);

  function checkoutHandler(e) {
    addButtonsArr.forEach((x) => (x.disabled = true));
    let productNames = Object.keys(products).join(", ");
    textArea.textContent += `You bought ${productNames} for ${totalSum.toFixed(
      2
    )}.`;
  }

  function addHandler(e) {
    let element = e.target;
    let productDiv = element.parentElement.parentElement;

    let title = productDiv.querySelector(".product-title");
    let priceDiv = productDiv.querySelector(".product-line-price");
    let name = title.textContent;
    let price = Number(priceDiv.textContent);
    totalSum += price;
    products[name] = true;
    textArea.textContent += `Added ${name} for ${price.toFixed(
      2
    )} to the cart.\n`;
  }
}
