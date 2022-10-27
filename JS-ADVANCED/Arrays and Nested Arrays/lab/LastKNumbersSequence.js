function solve(n, k) {
    let result = [1];
    let currentSum = 0;
    for (let i = 1; i < n; i++) {
        let count = 0;
        for (let m = result.length - 1; m >= 0; m--) {
            count++;
            if (count > k) {
                break;
            } else {
                currentSum += result[m];
            }
        }
        result[i] = currentSum;
        currentSum = 0;
    }
   return result;
}

solve(6, 3);
solve(8, 2);