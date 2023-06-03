function solve() {
  document.querySelector("#add").addEventListener("click", addTask);
  document.querySelectorAll("section")[1].addEventListener("click", inProgress);
  document.querySelectorAll("section")[2].addEventListener("click", complete);

  function addTask(event) {
    event.preventDefault();
    const task = document.getElementById("task").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    if (task === "" || description === "" || date === "") {
      return;
    }
    let article = createArticle(task, description, date);

    const orangeSection = document.getElementsByTagName("section")[1];
    const orangeDiv = orangeSection.querySelectorAll("div")[1];
    orangeDiv.appendChild(article);
  }

  function inProgress(event) {
    if (event.target.className === "red") {
      event.target.parentElement.parentElement.remove();
    }
    if (event.target.className !== "green") {
      return;
    }

    const article = event.target.parentElement.parentElement;
    const yellowSection = document.getElementsByTagName("section")[2];
    const buttonLeft = article.querySelectorAll("button")[0];
    const buttonRight = article.querySelectorAll("button")[1];
    buttonLeft.textContent = "Delete";
    buttonLeft.className = "red";
    buttonRight.textContent = "Finish";
    buttonRight.className = "orange";
    yellowSection.appendChild(article);
  }

  function complete(event) {
    if (event.target.className === "red") {
      event.target.parentElement.parentElement.remove();
    }
    if (event.target.className !== "orange") {
      return;
    }

    const completeSection = document.getElementsByTagName("section")[3];
    completeSection.appendChild(event.target.parentElement.parentElement);
    const buttonsDiv = event.target.parentElement;
    buttonsDiv.remove();
  }

  function createArticle(header, description, date) {
    const article = document.createElement("article");
    const h3Element = document.createElement("h3");
    const descriptionP = document.createElement("p");
    const dateP = document.createElement("p");
    const div = document.createElement("div");
    const greenButton = document.createElement("button");
    const redButton = document.createElement("button");

    div.classList.add("flex");
    greenButton.classList.add("green");
    redButton.classList.add("red");

    h3Element.textContent = header;
    descriptionP.textContent = `Description: ${description}`;
    dateP.textContent = `Due Date: ${date}`;
    greenButton.textContent = "Start";
    redButton.textContent = "Delete";
    article.appendChild(h3Element);
    article.appendChild(descriptionP);
    article.appendChild(dateP);
    div.appendChild(greenButton);
    div.appendChild(redButton);
    article.appendChild(div);
    return article;
  }
}
