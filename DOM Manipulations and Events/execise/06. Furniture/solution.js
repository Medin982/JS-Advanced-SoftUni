function solve() {
  let buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", addProduct);
  buttons[1].addEventListener("click", buyProduct);

  function addProduct(e) {
    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let tbody = document.querySelector('tbody');
    for (let ele of input) {
      let tr = document.createElement('tr');
      tr.innerHTML =
        `<tr><td><img src=${ele.img}></td>
      <td><p>${ele.name}</p></td>
      <td><p>${ele.price}</p></td>
      <td><p>${ele.decFactor}</p></td>
      <td><input type="checkbox"></td>`;
      tbody.appendChild(tr);
    }
  }

  function buyProduct() {
    let products = document.querySelectorAll('tbody tr');
    let res = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    for (let pr of products) {
      if (pr.querySelector('input[type=checkbox]:checked')) {
        let data = pr.querySelectorAll('td p');
        res.push(data[0].textContent);
        totalPrice += Number(data[1].textContent);
        totalDecFactor += Number(data[2].textContent);
      }
    }
    document.querySelectorAll('textarea')[1].textContent = `Bought furniture: ${res.join(", ")}\n` +
    `Total price: ${totalPrice.toFixed(2)}\n` +
    `Average decoration factor: ${totalDecFactor / res.length}`;

  }
}