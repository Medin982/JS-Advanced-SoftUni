function solve(arr) {
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    let firtsIndex = 0;
    let secondIndex = arr[0].length - 1;
    arr.forEach(array => {
        sumFirstDiagonal += array[firtsIndex++];
        sumSecondDiagonal += array[secondIndex--];
    });
    console.log(sumFirstDiagonal + " " + sumSecondDiagonal);
}

solve([[20, 40],
    [10, 60]]);