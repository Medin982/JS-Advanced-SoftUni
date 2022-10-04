function solve() {
  let buttons = document.querySelectorAll("button");
  buttons[0].addEventListener('click', addProduct);

  function addProduct(e) {
    let input = JSON.stringify(document.getElementsByTagName("textarea")[0].value);
  }
}