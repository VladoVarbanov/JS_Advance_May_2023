function search() {
  const result = document.getElementById("result");
  const searchText = document.getElementById("searchText").value;
  const townMatchID = [];
  const li = document.getElementsByTagName("ul")[0].children;
  let towns = Array.from(li);
  for (let i = 0; i < towns.length; i++) {
    const townName = towns[i].textContent;
    if (townName.includes(searchText)) {
      townMatchID.push(i);
    }
  }
  for (let i = 0; i < li.length; i++) {
    li[i].style.fontWeight = "normal";
    li[i].style.textDecoration = "none";
  }
  for (let i = 0; i < townMatchID.length; i++) {
    li[townMatchID[i]].style.fontWeight = "bold";
    li[townMatchID[i]].style.textDecoration = "underline";
  }
  result.textContent = `${townMatchID.length} matches found`;
}
