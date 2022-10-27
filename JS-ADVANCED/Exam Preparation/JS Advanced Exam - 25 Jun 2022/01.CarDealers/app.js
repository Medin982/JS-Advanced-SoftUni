window.addEventListener("load", solve);

function solve() {

  let inputs = document.querySelectorAll("input");
  let fuel = document.getElementById("fuel");
  let totalProfit = 0;
  document.getElementById("publish").addEventListener("click", addInfo);

  function addInfo(e) {
    e.preventDefault();
    if (!fuel.value.length) {
      return;
    }

    for (let input of inputs) {
      if (!input.value.length) {
        return;
      }
    }

    let originalCost = Number(document.getElementById("original-cost").value);
    let sellingPrice = Number(document.getElementById("selling-price").value);

    if (originalCost > sellingPrice) {
      return;
    }

    let table = document.getElementById("table-body");
    let tr = document.createElement("tr");
    tr.classList.add("row");
    tr.appendChild(createElement("td", inputs[0].value));
    tr.appendChild(createElement("td", inputs[1].value));
    tr.appendChild(createElement("td", inputs[2].value));
    tr.appendChild(createElement("td", fuel.value));
    tr.appendChild(createElement("td", inputs[3].value));
    tr.appendChild(createElement("td", inputs[4].value));

    let editBtn = createElement("button", "Edit");
    editBtn.setAttribute("class", "action-btn edit");
    let sellBtn = createElement("button", "Sell");
    sellBtn.setAttribute("class", "action-btn sell");
    let td = document.createElement("td");
    editBtn.addEventListener("click", sendInfo);
    sellBtn.addEventListener("click", sell);
    td.appendChild(editBtn);
    td.appendChild(sellBtn);
    tr.appendChild(td);
    table.appendChild(tr);

    for (let input of inputs) {
      input.value = "";
    }
  }

  function sendInfo(e) {
    let tr = e.target.parentElement.parentElement;
    let td = tr.children;
    inputs[0].value = td[0].textContent;
    inputs[1].value = td[1].textContent;
    inputs[2].value = td[2].textContent;
    fuel.value = td[3].textContent;
    inputs[3].value = td[4].textContent;
    inputs[4].value = td[5].textContent;
    tr.remove();
  }

  function sell(e) {
    let tr = e.target.parentElement.parentElement;
    let td = tr.children;
    let ul = document.getElementById("cars-list");
    let li = document.createElement("li");
    li.setAttribute("class", "each-list");
    li.appendChild(createElement("span", `${td[0].textContent} ${td[1].textContent}`));
    li.appendChild(createElement("span", td[2].textContent));
    li.appendChild(createElement("span",
      Math.abs(Number(td[4].textContent) - Number(td[5].textContent))));
    totalProfit += Math.abs(Number(td[4].textContent) - Number(td[5].textContent));
    document.getElementById("profit").textContent = totalProfit.toFixed(2);
    ul.appendChild(li);
    tr.remove();
  }

  function createElement(tag, value, className) {
    let ele = document.createElement(tag);
    ele.textContent = value;
    if (className) {
      ele.classList.add(className);
    }
    return ele;
  }
}
