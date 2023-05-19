function editElement(ref, match, replaceText) {
  let text = ref.textContent;
  let regex = new RegExp(match, "g");
  let res = text.replace(regex, replaceText);
  ref.textContent = res;
}
