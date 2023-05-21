function solve() {
  const text = document.querySelector("#text").value;
  const namingConvention = document.querySelector("#naming-convention").value;

  const lowerText = text.toLowerCase();
  const result = document.querySelector("#result");
  let textCollection = lowerText.split(" ");
  textCollection.forEach((element, index) => {
    let firstElement = element[0].toUpperCase();
    let restElement = element.slice(1);
    element = firstElement + restElement;
    textCollection[index] = element;
  });
  if (namingConvention === "Camel Case") {
    textCollection[0] = textCollection[0].toLowerCase();
    result.textContent = textCollection.join("");
  } else if (namingConvention === "Pascal Case") {
    result.textContent = textCollection.join("");
  } else {
    result.textContent = "Error!";
  }
}
