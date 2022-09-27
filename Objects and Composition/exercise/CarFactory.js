function solve(car) {
    let res = {};
    res.model = car.model;

    if (car.power <= 90) {
        res.engine = {
            power: 90,
            volume: 1800
        }
    } else if (car.power <= 120) {
        res.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        res.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (car.carriage === "hatchback") {
        res.carriage = {
            type: "hatchback",
            color: car.color
        }
    } else {
        res.carriage = {
            type: "coupe",
            color: car.color
        }
    }

    let size;
    if (car.wheelsize % 2 !== 0) {
        size = car.wheelsize;
    } else {
        size = car.wheelsize - 1;
    }

    res.wheels = [size, size, size, size];

    return res;
}

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));