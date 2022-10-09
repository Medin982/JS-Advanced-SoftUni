function solution() {
    let products = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1, flavour: 2
        },
        lemonade: {
            carbohydrate: 10, flavour: 20
        },
        burger: {
            carbohydrate: 5, fat: 7, flavour: 3
        },
        eggs: {
            protein: 5, fat: 1, flavour: 1
        },
        turkey: {
            protein: 10, carbohydrate: 10, fat: 10, flavour: 10
        }
    }

    return function solve(input) {
        let work = working();
        let [command, options, quantity] = input.split(" ");
        return work[command](options, quantity);
    }

    function working() {
        return {
            restock: (product, quantity) => {
                products[product] += Number(quantity);
                return 'Success';
            },
            prepare: (recipe, quantity) => {
                let flag = true;
                let neededProduct = '';
                for (let [key, value] of Object.entries(recipes[recipe])) {
                    let neededValue = Number(quantity) * value;
                    if (products[key] < neededValue) {
                        flag = false;
                        neededProduct = key;
                        break;
                    }
                }

                if (!flag) {
                    return `Error: not enough ${neededProduct} in stock`;
                } else {
                    for (let [key, value] of Object.entries(recipes[recipe])) {
                        let neededValue = Number(quantity) * value;
                        products[key] -= neededValue;
                    }
                    return 'Success';
                }
            },
            report: () => {
                return `protein=${products['protein']}` + 
                ` carbohydrate=${products["carbohydrate"]}` + 
                ` fat=${products["fat"]} flavour=${products["flavour"]}`;
            }
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));