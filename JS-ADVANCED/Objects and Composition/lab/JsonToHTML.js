function solve(json) {
    let parsed = JSON.parse(json);
    let columnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));
    let result = `<table>\n`;
    appendHeaders(columnNames);
    appendValues(values);
     result += `</table>`

    function appendHeaders(columnNames) {
        result += `    <tr>`;
        for (let columnName of columnNames) {
            result += `<th>${columnName}</th>`;
        }
        result += `</tr>\n`;
    }

    function appendValues(values) {
        for (let value of values) {
            result += `    <tr>`;
            result += `<td>${value[0]}</td><td>${value[1]}</td>`;
            result += `</tr>\n`;
        }
    }

    console.log(result);
}