function addItem() {
    let ul = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let text = input.value;
    if (text.length === 0) return;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    let remove = document.createElement('a');
    remove.appendChild(document.createTextNode("[Delete]"));
    remove.href = '#';
    remove.addEventListener("click", function (event) {
        event.target.parentElement.remove();
    });
    li.appendChild(remove);
    ul.appendChild(li);
    input.value = " ";
}