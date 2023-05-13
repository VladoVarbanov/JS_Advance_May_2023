function sortAnArrayByTwoCriteria(arr) {
  //
  arr.sort((a, b) => {
    if (a.length - b.length !== 0) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}
sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
console.log("==========================");
sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("==========================");
sortAnArrayByTwoCriteria(["test", "Deny", "omen", "Default"]);
