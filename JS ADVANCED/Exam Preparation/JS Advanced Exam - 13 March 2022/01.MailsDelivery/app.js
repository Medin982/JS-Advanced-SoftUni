function solve() {
    let name = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    document.getElementById("add").addEventListener("click", addToList);
    document.getElementById("reset").addEventListener("click", clearInputs);

    function addToList(e) {
        e.preventDefault();
        if (!name.value || !title.value || !message.value) {
            return;
        }

        let li = document.createElement("li");
        li.appendChild(createElement("h4", `Title: ${title.value}`));
        li.appendChild(createElement("h4", `Recipient Name: ${name.value}`));
        li.appendChild(createElement("span", message.value));
        let div = document.createElement("div");
        div.setAttribute("id", "list-action");
        let sendBtn = createElement("button", "Send");
        sendBtn.setAttribute("type", "submit");
        sendBtn.setAttribute("id", "send");
        sendBtn.addEventListener("click", sendMails);
        let deleteBtn = createElement("button", "Delete");
        deleteBtn.setAttribute("type", "submit");
        deleteBtn.setAttribute("id", "delete");
        deleteBtn.addEventListener("click", deleteMails);
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        li.appendChild(div);
        document.getElementById("list").appendChild(li);
        clearInputs();

    }

    function deleteMails(e) {
        let listOfMails = e.target.parentElement.parentElement.children;
        let li = document.createElement("li");
        if (listOfMails.length > 3) {
            li.appendChild(createElement("span", `To: ${listOfMails[1].textContent.split(": ")[1]}`));
            li.appendChild(createElement("span", listOfMails[0].textContent));
        } else {
            li.appendChild(createElement("span", listOfMails[0].textContent));
            li.appendChild(createElement("span", listOfMails[1].textContent));
        }

        document.getElementsByClassName("delete-list")[0].appendChild(li);
        e.target.parentElement.parentElement.remove();

    }

    function sendMails(e) {
        let listOfMails = e.target.parentElement.parentElement.children;
        let li = document.createElement("li");
        li.appendChild(createElement("span", `To: ${listOfMails[1].textContent.split(": ")[1]}`));
        li.appendChild(createElement("span", listOfMails[0].textContent));
        let div = document.createElement("div");
        div.setAttribute("class", "btn");
        let deleteButton = createElement("button", "Delete");
        deleteButton.setAttribute("type", "submit");
        deleteButton.setAttribute("class", "delete");
        deleteButton.addEventListener("click", deleteMails);
        div.appendChild(deleteButton);
        li.appendChild(div);
        document.getElementsByClassName("sent-list")[0].appendChild(li);
        e.target.parentElement.parentElement.remove();
    }

    function createElement(tag, value) {
        let ele = document.createElement(tag);
        ele.textContent = value;
        return ele;
    }

    function clearInputs() {
        title.value = "";
        name.value = "";
        message.value = "";
    }
}
solve()