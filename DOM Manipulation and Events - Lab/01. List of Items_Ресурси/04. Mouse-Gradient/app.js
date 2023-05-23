function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", hoverHandler);
  gradient.addEventListener("mouseout", clearHandler);
  let resultDiv = document.getElementById("result");
  function hoverHandler(e) {
    let offsetX = e.offsetX;
    let element = e.target;
    let elementX = element.clientWidth;

    let xPercent = Math.trunc((offsetX / elementX) * 100);
    resultDiv.textContent = `${xPercent}%`;
  }
  function clearHandler() {
    resultDiv.textContent = "";
  }
}
