function calculete (type, weigthOfGrams, pricePerKg) {
let kilograms = weigthOfGrams / 1000;
let neededSum = kilograms * pricePerKg;

console.log(`I need $${neededSum.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`)
}

calculete('orange', 2500, 1.80);

calculete('apple', 1563, 2.35);