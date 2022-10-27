function solve(arr) {
    let bottles = new Map();
    
    arr.reduce((res, cur) => {
        let [juiceName, juiceQuantity] = cur.split(" => ");
        juiceQuantity = Number(juiceQuantity);

        if (!res.hasOwnProperty(juiceName)) {
            res[juiceName] = 0;
        }

        res[juiceName] += juiceQuantity;

        if (res[juiceName] >= 1000) {
            if (!bottles.has(juiceName)) {
                bottles.set(juiceName, 0);
            }
            bottles.set(juiceName, bottles.get(juiceName) + parseInt(res[juiceName] / 1000));
            res[juiceName] %= 1000;
        }

     res = {};

    },{});

    for( let[juice, count] of bottles) {
        console.log(`${juice} => ${count}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);