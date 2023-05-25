function encodeAndDecodeMessages() {
  // Capture buttons.
  const [encodeBtn, decodeBtn] = Array.from(
    document.querySelectorAll("#main button")
  );
  const textContainers = Array.from(
    document.querySelectorAll("#main textarea")
  );

  //   Attach events.
  encodeBtn.addEventListener("click", encodeAndSends);
  decodeBtn.addEventListener("click", decodeAndRead);

  //   Helper functions.
  function transformText(text, cb) {
    return text.split("").map(cb).join("");
  }
  function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
  }
  function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  //    On Click callbacks.
  function encodeAndSends(e) {
    textContainers[1].value = transformText(textContainers[0].value, nextChar);
    textContainers[0].value = "";
  }

  function decodeAndRead(e) {
    textContainers[1].value = transformText(textContainers[1].value, prevChar);
  }
}
