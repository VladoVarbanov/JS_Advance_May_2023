function getManager() {
  // dictionaries
  const elements = {
    flavour: 0,
    protein: 0,
    carbohydrate: 0,
    fat: 0,
  };

  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { carbohydrate: 10, protein: 10, fat: 10, flavour: 10 },
  };

  // error handling
  const commands = {
    restock: () => {},
    prepare: () => {},
    report: () => {},
  };
}
let manager = getManager();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
