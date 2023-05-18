function storeCatalogue(input) {
  const sortedInput = input.sort((a, b) => a.localeCompare(b));
  const dict = {};
  for (let i = 0; i < sortedInput.length; i++) {
    const element = sortedInput[i].split(" : ").join(": ");
    const firstLetter = element[0];

    if (dict[firstLetter] === undefined) {
      dict[firstLetter] = [];
    }

    dict[firstLetter].push(`  ${element}`);
  }

  let output = [];
  for (const key in dict) {
    const element = dict[key];
    output = [...output, key, ...element];
  }
  //   console.log(output.join("\n"));
  return output.join("\n");
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
