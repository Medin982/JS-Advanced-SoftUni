function solve(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    let sum = Number(first) + Number(last);
    console.log(sum);
}

solve(['20', '30', '40']);