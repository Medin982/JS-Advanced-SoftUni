function solve(arr) {
    let matrix = createMatrix(arr);
    let sumMainDiagonal = 0;
    let sumSecondDiagonal = 0;
    let arrayMainDiagonalIndex = [];
    let arraySecondDiagonalIndex = [];

    for (let i = 0; i < arr.length; i++) {
        sumMainDiagonal += Number(matrix[i][i]);
        arrayMainDiagonalIndex.push(i + " " + i);
    }

    for (let k = arr.length - 1; k >= 0; k--) {
        sumSecondDiagonal += Number(matrix[k][k]);
        arraySecondDiagonalIndex.push(k + " " + k);
    }

    if (sumMainDiagonal !== sumSecondDiagonal) {
        return console.log(matrix.join(" "));
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let [rowMainDiagonl, colMainDiagonl] = Number(arrayMainDiagonalIndex[row].split(" "));
            let [rowSecondDiagonl, colSecondDiagonl] = arraySecondDiagonalIndex[row].split(" ");
            if ((row !== rowMainDiagonl && col !== colMainDiagonl)) {
                matrix[row][col] = sumMainDiagonal;
            }
        }
    }

    matrix.forEach(row => console.log(row.join(" ")));


    function createMatrix(arr) {
        let matrix = [];
        for (let i = 0; i < arr.length; i++) {
            matrix[i] = (arr[i].split(" "));
        }
        return matrix;
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);