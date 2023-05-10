function daysInAMonth(month, years) {
  let date = new Date(years, month, 0);
  console.log(date.getDate());
}
daysInAMonth(2, 2021);
