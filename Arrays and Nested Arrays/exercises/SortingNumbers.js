function sortNum(arr) {
    let result = [];
    while (arr.length > 0) {
        let min = Math.min(...arr);
        let index = arr.indexOf(min);
        arr.splice(index, 1);
        result.push(min);
        if (arr.length != 0) {
            let max = Math.max(...arr);
            index = arr.indexOf(max);
            arr.splice(index, 1);
            result.push(max);
        }
    }

    return result;
}

console.log(sortNum([1, 65, 3, 3, 48, 63, 31, -3, 18]));