function solve(n, k) {
    let firstNum = Number(k);
    let secondNum = Number(n);
    let result = [];
    let currentSum = 1;
    for (let i = 0; i < n; i++) {
        result[i] = currentSum; 
       for(let m = 0; m < k; m++) {
        currentSum += result[m];
       } 
    }
    console.log(result);
}

solve(6, 3);
solve(8, 2);