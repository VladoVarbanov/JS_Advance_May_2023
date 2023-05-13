function addAndRemoveElements(arr) {
  //
  const initialNumber = 1;
  let num = 0;
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    num += initialNumber;
    if (element === "add") {
      output.push(num);
    } else {
      output.splice(-1, 1);
    }
  }
  if (output.length === 0) {
    console.log("Empty");
    return;
  }
  for (const el of output) {
    console.log(el);
  }
}
addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
