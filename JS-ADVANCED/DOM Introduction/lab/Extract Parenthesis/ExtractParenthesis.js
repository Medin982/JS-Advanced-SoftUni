function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = text.matchAll(pattern);
    let matches = [];
    for (let tx of result) {
        matches.push(tx[1]);
    }
    return matches.join('; ');
}