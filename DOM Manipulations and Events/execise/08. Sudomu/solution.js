function solve() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', checkSudomu);
    buttons[1].addEventListener('click', clearSudamu);
    let table = document.querySelectorAll('tbody tr');

    function checkSudomu() {
        let sum = 0;
        for (let row of table) {
            let ele = row.querySelectorAll('td');
            for (let e of ele) {
            
            }
        }
    }

    function clearSudamu() {

    }
}