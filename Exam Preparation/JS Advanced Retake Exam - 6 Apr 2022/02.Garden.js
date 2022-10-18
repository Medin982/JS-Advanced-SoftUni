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
        let current = this.plants.find(p => {p.plantName === plantName});

        if(current === undefined){
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
        `${quantity} ${plantName}s has successfully ripened.` :
        `${quantity} ${plantName}s have successfully ripened.`;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));