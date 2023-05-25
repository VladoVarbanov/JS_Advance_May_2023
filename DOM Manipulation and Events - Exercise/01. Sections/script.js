function create(words) {
  const contentDiv = document.getElementById("content");

  words.forEach((word) => {
    const div = document.createElement("div");
    const paragraph = document.createElement("p");

    paragraph.textContent = word;
    paragraph.style.display = "none";

    div.appendChild(paragraph);
    div.addEventListener("click", revealOnClick);

    contentDiv.appendChild(div);
  });
  function revealOnClick(e) {
    e.currentTarget.children[0].style.display = "block";
  }
}
