function solve(arr) {
    let result = [];
    let biggestNum = arr.shift();
    result.push(biggestNum);

    for (el of arr) {
        if (el >= biggestNum) {
            result.push(el);
            biggestNum = el;
        }
    }

    return result;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);