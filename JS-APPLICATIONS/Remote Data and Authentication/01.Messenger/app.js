function attachEvents() {
    document.getElementById("refresh").addEventListener("click", loadMessage);
    document.getElementById("submit").addEventListener("click", getData);

    function getData() {
        const name = document.querySelector('input[name=author]');
        const content = document.querySelector('input[name=content]');
        const formMsg = {
            "author": name.value,
            "content": content.value
        };
        name.value = "";
        content.value = "";
        sendMessage(formMsg);
    }


    async function sendMessage(data) {
        const response = await fetch("http://localhost:3030/jsonstore/messenger", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    async function loadMessage() {
        const responseMsg = await fetch("http://localhost:3030/jsonstore/messenger");
        const data = await responseMsg.json();
        const message = document.getElementById("messages");
        let allMessage = "";
        for (let msg of Object.values(data)) {
            allMessage += `${msg.author}: ${msg.content}\n`;
        }
        allMessage = allMessage.substring(0, allMessage.length - 1);
        message.value = allMessage;
        console.log(message);
        message.removeAttribute("disabled");
    }
}

attachEvents();
