window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");
    document.querySelector("form [type=submit]").addEventListener("click", sendForm);
    document.getElementsByClassName("clear-btn")[0].addEventListener("click", () => {
        Array.from(document.querySelectorAll("#completed-orders .container"))
            .forEach(e => e.remove());
    });

    function sendForm(e) {
        e.preventDefault();
        if (!description.value || !clientName.value || !clientPhone.value) {
            return;
        }

        let div = document.createElement("div");
        div.setAttribute("class", "container");
        div.appendChild(createElement("h2", `Product type for repair: ${productType.value}`));
        div.appendChild(createElement("h3", `Client information: ${clientName.value}, ${clientPhone.value}`));
        div.appendChild(createElement("h4", `Description of the problem: ${description.value}`));
        let startRepairBtn = createElement("button", "Start repair");
        startRepairBtn.setAttribute("class", "start-btn");
        startRepairBtn.addEventListener("click", startRepair);
        let finishBtn = createElement("button", "Finish repair");
        finishBtn.setAttribute("class", "finish-btn");
        finishBtn.setAttribute("disabled", "");
        finishBtn.addEventListener("click", finishRepair);
        div.appendChild(startRepairBtn);
        div.appendChild(finishBtn);
        document.getElementById("received-orders").appendChild(div);

        clearInputs();
    }

    function finishRepair(e) {
        let info = e.target.parentElement;
        info.getElementsByClassName("finish-btn")[0].remove();
        info.getElementsByClassName("start-btn")[0].remove();
        document.getElementById("completed-orders").appendChild(info);
    }

    function startRepair(e) {
        e.target.setAttribute("disabled", "");
        e.target.parentElement
            .getElementsByClassName("finish-btn")[0].removeAttribute("disabled");
    }

    function clearInputs() {
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";
    }

    function createElement(tag, value) {
        let ele = document.createElement(tag);
        ele.textContent = value;
        return ele;
    }
}