function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const busList = document.getElementById("buses");

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            return response.json();
        })
        .then((data) => {
            document.getElementById("stopName").textContent = data.name;
            busList.innerHTML = "";
            stopId.value = "";
            Object.entries(data.buses)
                .forEach(([k, v]) => {
                    const li = document.createElement("li");
                    li.textContent = `Bus ${k} arrives in ${v} minutes`;
                    busList.appendChild(li);
                });
        })
        .catch((e) => {
            busList.innerHTML = "";
            stopId.value = "";
            document.getElementById("stopName").textContent = "Error";
        });
}