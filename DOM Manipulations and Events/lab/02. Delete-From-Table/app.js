function deleteByEmail() {
    let email = document.querySelector("input").value;
    let table = document.querySelectorAll('tbody tr td:nth-child(2)');
    for (let td of table) {
        if (td.textContent === email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted.";
            return;
        }
        document.getElementById('result').textContent = "Not Found.";
    }
}