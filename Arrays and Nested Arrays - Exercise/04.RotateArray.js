function rotateArray(arr, amount) {
  //
  for (let i = 0; i < amount; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
console.log("===================================");
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
