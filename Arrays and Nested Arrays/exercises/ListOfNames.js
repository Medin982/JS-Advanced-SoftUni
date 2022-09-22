function sort(arr) {
    arr.sort((a,b) => a.localeCompare(b));
    let result = [];
    let count = 0;
    for(el of arr) {
        count++;
        result.push(`${count}.${el}`);
    }

    console.log(result.join("\n"));
}

sort(["John", "Bob", "Christina", "Ema"]);