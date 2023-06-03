/*function generateReport() {
  let firstRow = Array.from(document.querySelectorAll("thead > tr th")).filter(
    (x) => x.querySelector('input[type="checkbox"]').checked
  );
  let allTrPeople = Array.from(document.querySelectorAll("tbody tr"));
  let output = document.getElementById("output");
  let allPeople = [];
  output.textContent = "";

  for (let i = 0; i < allTrPeople.length; i++) {
    const element = allTrPeople[i];
    let person = {};

    for (const th of firstRow) {
      if (th.textContent === "Employee ") {
        person["employee"] = element.querySelectorAll("td")[0].textContent;
      }
      if (th.textContent === "Department ") {
        person.deparment = element.querySelectorAll("td")[1].textContent;
      }
      if (th.textContent === "Status ") {
        person.status = element.querySelectorAll("td")[2].textContent;
      }
      if (th.textContent === "Date Hired ") {
        person.dateHired = element.querySelectorAll("td")[3].textContent;
      }
      if (th.textContent === "Benefits ") {
        person.benefits = element.querySelectorAll("td")[4].textContent;
      }
      if (th.textContent === "Compensation ") {
        person.salary = element.querySelectorAll("td")[5].textContent;
      }
      if (th.textContent === "Rating ") {
        person.rating = element.querySelectorAll("td")[6].textContent;
      }
    }
    allPeople.push(person);
  }
  output.textContent = JSON.stringify(allPeople);
  //   output.textContent = allPeople;
}
*/

function generateReport() {
  const html = {
    checkboxes: document.querySelectorAll("input[type='checkbox']"),
    rows: document.getElementsByTagName("tr"),
    output: document.getElementById("output"),
  };
  const selected = Array.from(html.checkboxes)
    .map((x, i) => [x, i])
    .filter((x) => x[0].checked)
    .map((x) => [x[0].name, x[1]]);

  const rowData = Array.from(html.rows)
    .slice(1)
    .map((x) => Array.from(x.children).map((y) => y.innerHTML));

  html.output.value = JSON.stringify(
    rowData.map((x) =>
      selected.reduce((a, v) => {
        const [sColName, sColIndex] = v;
        a[sColName] = x[sColIndex];
        return a;
      }, {})
    )
  );
}
