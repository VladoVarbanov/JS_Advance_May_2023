function extract(content) {
  let p = document.getElementById(content);
  let text = p.textContent;

  let regex = /\(([^()]*)\)/g;
  let res = [...text.matchAll(regex)].map((x) => x[1]);
  return res.join("; ");
}
