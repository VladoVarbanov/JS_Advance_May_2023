function notify(message) {
  let messageDiv = document.getElementById("notification");
  messageDiv.textContent = message;
  messageDiv.style.display = "block";

  messageDiv.addEventListener("click", onclick);

  function onclick(e) {
    messageDiv.style.display = "none";
  }
}
