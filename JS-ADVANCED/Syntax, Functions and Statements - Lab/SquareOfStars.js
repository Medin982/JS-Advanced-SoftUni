function squareOfStars(num) {
    let count = num;
    if (count === undefined) {
        count = 5;
    }
    let result = '';
    for (let i = 1; i <= count; i++) {
        for (let k = 1; k <= count; k++) {
            if (k >= count) {
                result += '*\n';
                break;
            }
            result += '* ';
        }
    }
    console.log(result);
}

squareOfStars(7);

