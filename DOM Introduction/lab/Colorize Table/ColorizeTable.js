function colorize() {
    let table = document.querySelectorAll('table tr');
    for (let i = 0; i < table.length; i++) {
       if (i % 2 !== 0) {
            table[i].style.background = 'teal';
       }
    }
}