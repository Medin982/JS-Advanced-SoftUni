function solve() {
    let inputs = document.querySelectorAll("#signup input");
    document.getElementById("add-worker").addEventListener("click", hireWorker);
    let budget = 0;

    function hireWorker(e) {
        e.preventDefault();
        for (let input of inputs) {
            if (!input.value) {
                return;
            }
        }
        let tr = document.createElement("tr");
        tr.appendChild(createElement("td", inputs[0].value));
        tr.appendChild(createElement("td", inputs[1].value));
        tr.appendChild(createElement("td", inputs[2].value));
        tr.appendChild(createElement("td", inputs[3].value));
        tr.appendChild(createElement("td", inputs[4].value));
        tr.appendChild(createElement("td", inputs[5].value));
        budget += Number(inputs[5].value);
        let firedBtn = createElement("button", "Fired");
        firedBtn.setAttribute("class", "fired");
        firedBtn.addEventListener("click", firedWorker);
        let editBtn = createElement("button", "Edit");
        editBtn.setAttribute("class", "edit");
        editBtn.addEventListener("click", editWorker);
        let td = document.createElement("td");
        td.appendChild(firedBtn);
        td.appendChild(editBtn);
        tr.appendChild(td);

        document.getElementById("tbody").appendChild(tr);
        document.getElementById("sum").textContent = budget.toFixed(2);
        clearInputs();
    }

    function firedWorker(e) {
        let workerInfo = e.target.parentElement.parentElement;
        let arrInfo = workerInfo.children;
        budget -= Number(arrInfo[5].textContent);
        document.getElementById("sum").textContent = budget.toFixed(2);
        workerInfo.remove();
    }

    function editWorker(e) {
        let workerInfo = e.target.parentElement.parentElement;
        let arrInfo = workerInfo.children;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = arrInfo[i].textContent;
        }
        budget -= Number(arrInfo[5].textContent);
        document.getElementById("sum").textContent = budget.toFixed(2);
        workerInfo.remove();
    }

    function clearInputs() {
        for (let input of inputs) {
            input.value = "";
        }
    }

    function createElement(tag, value) {
        let ele = document.createElement(tag);
        ele.textContent = value;
        return ele;
    }
}
solve()