// function solve() {
//   const textArea = document.getElementById("input").value;
//   let output = document.getElementById("output");
//   const regex = /[A-Za-z]*[0-9]*[^.!?]*[.!?]/g;
//   let textArr = textArea.match(regex);

//   for (let i = 0; i < textArr.length; i += 3) {
//     let p = document.createElement("p");
//     for (let j = 0; j < 3; j++) {
//       if (j >= textArr.length) {
//         break;
//       }
//       p.textContent = p.textContent + textArr[i + j];
//     }
//     output.appendChild(p);
//   }
// }

// function solve() {
//   let getInputField = Array.from(
//     document
//       .querySelector("#input")
//       .value.split(".")
//       .filter((x) => x)
//   );
//   let getOutputField = document.querySelector("#output");
//   let deepCopy = JSON.parse(JSON.stringify(getInputField));
//   let sentenceCounter = 0;
//   let node = document.createTextNode("");

//   for (const sentence of getInputField) {
//     node.appendData(`${sentence}`);
//     sentenceCounter++;

//     if (sentenceCounter === 3 || deepCopy.length === 1) {
//       let paragraph = document.createElement("p");
//     }
//   }
// }

function solve() {
  let text = document.getElementById("input").value;
  let arr = text.split(".").filter((x) => x !== "");
  let result = document.getElementById("output");

  while (arr.length > 0) {
    let textArr = arr.splice(0, 3).join(".") + ".";
    let p = document.createElement("p");
    p.textContent = textArr;
    result.appendChild(p);
  }
}
