function argumentInfo(...args) {
  let obj = {};

  // Sum while looping the arguments.
  args.forEach((arg) => {
    const typeOfArg = typeof arg;
    console.log(`${typeOfArg}: ${arg}`);

    obj[typeOfArg] = obj[typeOfArg]
      ? (obj[typeOfArg] += 1)
      : (obj[typeOfArg] = 1);
  });

  // Sort DESC.
  const sortedInDescOrder = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  // Print
  sortedInDescOrder.forEach(([key, value]) => {
    console.log(`${key} = ${value}`);
  });
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1
