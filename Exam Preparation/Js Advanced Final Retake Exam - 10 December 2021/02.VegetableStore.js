class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        for (let ele of vegetables) {
            let [type, quantity, price] = ele.split(" ");
            let exist = this.availableProducts.find(p => p.type === type);
            if (!exist) {
                let newProduct = {
                    type,
                    quantity: Number(quantity),
                    price: Number(price)
                };
                this.availableProducts.push(newProduct);
                continue;
            }
            exist.quantity += Number(quantity);
            if (exist.price < Number(price)) {
                exist.price = Number(price);
            }

            let res = "Successfully added ";
            this.availableProducts.forEach(p => res += `${p.type}, `);
            res = res.substring(0, res.length - 2);
            return res;
        }
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let ele of selectedProducts) {
            let [type, quantity] = ele.split(" ");
            let exist = this.availableProducts.find(p => p.type === type);
            if (!exist) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (exist.quantity < quantity) {
                throw new Error(
                    `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let currentPrice = exist.price * Number(quantity);
            exist.quantity -= Number(quantity);
            totalPrice += currentPrice;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let exist = this.availableProducts.find(p => p.type === type);
        if (!exist) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (exist.quantity <= quantity) {
            exist.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        exist.quantity -= Number(quantity);
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let res = "Available vegetables:\n";
        this.availableProducts.sort((a, b) => a.price - b.price);
        this.availableProducts.forEach(p => res += `${p.type}-${p.quantity}-$${p.price}\n`);
        res += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return res;
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
