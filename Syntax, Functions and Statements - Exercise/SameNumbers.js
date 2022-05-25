function sameNumbers(num) {
    let numToString = String(num);
    let isSame = true;
    let firstDigt = numToString[1];
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
        let current = +numToString[i];
        sum += current;
        if (firstDigt != current) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);