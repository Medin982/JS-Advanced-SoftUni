function solve(arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] >= biggestNum) {
                biggestNum = arr[row][col];
            }
        }
    }
    return biggestNum;
}

console.log(solve(
    [[20, 50, 10],
    [8, 33, 145]]));
console.log(solve(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));