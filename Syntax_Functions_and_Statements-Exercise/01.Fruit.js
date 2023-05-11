function fruit(fruit, weight, money) {
  let weightKG = weight / 1000;
  let totatlMoney = weightKG * money;
  console.log(
    `I need $${totatlMoney.toFixed(2)} to buy ${weightKG.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
