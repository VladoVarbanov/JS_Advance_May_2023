function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const mainClass = document.getElementsByClassName("tbody")[0];
    //  let test = mainClass.getElementsByClassName("td");
    console.log(mainClass);
  }
}
