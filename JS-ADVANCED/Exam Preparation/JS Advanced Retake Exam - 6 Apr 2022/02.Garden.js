class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };

        this.spaceAvailable -= spaceRequired;
        this.plants.push(plant);
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let current = this.plants.find(p => p.plantName === plantName);

        if(!current){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
         
        if (current.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        current.ripe = true;
        current.quantity += Number(quantity);
        return quantity === 1 ?
        `${quantity} ${plantName} has successfully ripened.` :
        `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        let current = this.plants.find(p => p.plantName === plantName);
        if (!current) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!current.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let index = this.plants.indexOf(current);
        this.plants.splice(index, 1);
        let quantity = current.quantity;
        this.storage.push({plantName, quantity});
        this.spaceAvailable += current.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let res = `The garden has ${ this.spaceAvailable } free space left.\n`;
        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
        res += `Plants in the garden: ${this.plants.map(p => p.plantName).join(", ")}\n`;
        if (!this.storage.length) {
            res += "Plants in storage: The storage is empty.";
        } else {
            res += `Plants in storage: `;
            this.storage.forEach(p => res += `${p.plantName} (${p.quantity}), `);
            res = res.substring(0, res.length - 2);
        }

        return res;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());