function solve(arr) {
    arr.sort((a, b) => a - b);
    let result = arr.slice(0, 2);
    console.log(result.join(" "));
}

solve([30, 15, 5, 5]);
solve([3, 0, 10, 4, 7, 3]);