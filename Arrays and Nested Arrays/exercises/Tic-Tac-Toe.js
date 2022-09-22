function ticTacToe(coordinates) {
    let table = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    let firstPlayer = true;
    

    for (el of coordinates) {
        let marker = firstPlayer ? "X" : "O";

        let [row, col] = el.split(" ");

        if (table[row][col]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        table[row][col] = marker;

        if (chechWinner(table, marker)) {
            console.log(`Player ${marker} wins!`);
            console.log(print(table));
            return;
        }

        if (!checkFreeSpace(table)) {
            console.log("The game ended! Nobody wins :(");
            console.log(print(table));
            return;
        }

        firstPlayer = !firstPlayer;

    }

    function chechWinner(table, marker) {
        for (let i = 0; i < table.length; i++) {
            if (table[i][0] === marker &&
                table[i][1] === marker &&
                table[i][2] === marker) {
                return true;
            } else if (table[0][i] === marker &&
                table[1][i] === marker &&
                table[2][i] === marker) {
                return true;
            } else if (table[0][0] === marker &&
                table[1][1] === marker &&
                table[2][2] === marker) {
                return true;
            } else if (table[0][2] === marker &&
                table[1][1] === marker &&
                table[2][0] === marker) {
                return true;
            }
        }
        return false;
    }

    function checkFreeSpace(table) {
        for (let row = 0; row < table.length; row++) {
            for (let col = 0; col < table[row].length; col++) {
                if (!table[row][col]) {
                    return true;
                }
            }

        }
        return false;
    }

    function print(table) {
        table.forEach(row => console.log(row.join("\t")));
    }
}

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);