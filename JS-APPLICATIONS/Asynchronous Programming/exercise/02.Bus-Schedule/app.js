function solve() {

    let currentStop = "";
    let nextStop = "depot";

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
            .then((respone) => respone.json())
            .then((data) => {
                const span = document.createElement("span");
                span.setAttribute("class", "info");
                span.textContent = `Next stop ${data.name}`;
                const info = document.getElementById("info");
                info.innerHTML = "";
                info.appendChild(span);
                currentStop = data.name;
                nextStop = data.next;
                document.getElementById("arrive").removeAttribute("disabled", "");
                document.getElementById("depart").setAttribute("disabled", true);
            })
            .catch((e) => {
                document.getElementById("depart").setAttribute("disabled", true);
                document.getElementById("arrive").setAttribute("disabled", true);
                document.getElementById("info").textContent = "Error";
            });
    }

    function arrive() {
        const span = document.createElement("span");
        span.setAttribute("class", "info");
        span.textContent = `Arriving at ${currentStop}`;
        const info = document.getElementById("info");
        info.innerHTML = "";
        info.appendChild(span);
        document.getElementById("depart").removeAttribute("disabled", "");
        document.getElementById("arrive").setAttribute("disabled", true);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();