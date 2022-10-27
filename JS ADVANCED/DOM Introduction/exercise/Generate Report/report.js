function generateReport() {
    let tableRow = document.querySelectorAll("tbody tr");
    let tableName = document.querySelectorAll("thead tr th");

    let result = [];
    for (let row = 0; row < tableRow.length; row++) {
        let tableCel = tableRow[row].cells;
        let data = {};
        for (let i = 0; i < tableName.length; i++) {
            let currentRow = tableName[i].childNodes;
            if (currentRow[1].checked) {
                data[currentRow[0].textContent.trim().toLocaleLowerCase()] = tableCel[i].textContent;
            }
        }
        result.push(data);
    }
    document.getElementById("output").textContent = JSON.stringify(result);
}