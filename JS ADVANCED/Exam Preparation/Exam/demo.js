function solve(input) {
    let year = 18;
    let cash = Number(input[0]);
    let endYears = Number(input[1]);
    let haveMoney
    for (let i = 1800; i <= endYears; i++) {


        year++;

        if (i % 2 === 0) {
            cash -= 12000;
        } else {
            cash -= 12000 + (year * 50);
        }

    }
}


}