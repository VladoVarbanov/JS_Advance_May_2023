function extractText() {
  let lis = document.getElementsByTagName("li");
  let liArray = Array.from(lis);
  let allTexts = liArray.map((x) => x.textContent);

  let textArea = document.getElementById("result");
  textArea.value = allTexts.join("\n");
}
