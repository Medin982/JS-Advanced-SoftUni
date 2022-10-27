function solve(arr) {
    let towns = arr.
        map(ele => {
            let date = ele.split(" <-> ");
            return {
                name: date[0],
                populatin: Number(date[1])
            };
        }).reduce((result, town) => {
            if (result[town.name] !== undefined) {
                result[town.name] += town.populatin;
            } else {
                result[town.name] = town.populatin;
            }
            return result;
        }, {});

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
