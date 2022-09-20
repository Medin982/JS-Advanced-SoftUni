function solve(arr, count) {
    for (let i = 0; i < count; i++) {
       let num = arr.pop();
       arr.unshift(num);
    }
    console.log(arr.join(" "));
}

solve(['1', 
'2', 
'3', 
'4'], 
2);