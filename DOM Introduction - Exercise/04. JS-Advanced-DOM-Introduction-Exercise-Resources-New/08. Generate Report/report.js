function generateReport() {
  let firstRow = Array.from(document.querySelectorAll("thead > tr th")).filter(
    (x) => x.querySelector('input[type="checkbox"]').checked
  );
  let allTrPeople = Array.from(document.querySelectorAll("tbody tr"));
  console.log(allTrPeople[0].querySelector("td").textContent);
  let allPeople = [];
  let People = {};
}
