class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        let car = {
            model,
            horsepower,
            price,
            mileage
        };
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(c => c.model === model);
        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        if(car.mileage > desiredMileage) {
            let diffence = Math.abs(car.mileage - desiredMileage);
            diffence <= 40000 ? 
            car.price = car.price - (car.price * 0.05) :
            car.price = car.price - (car.price * 0.10);
        }

        let index = this.availableCars.indexOf(car);
        this.availableCars.splice(index, 1);
        let horsepower = car.horsepower;
        let price = car.price;
        this.soldCars.push({
            model,
            horsepower,
            price
        });

        this.totalIncome += price;
        return `${model} was sold for ${price.toFixed(2)}$`;
    }

    currentCar() {
        if (!this.availableCars.length) {
            return "There are no available cars";
        } 

        let res = "-Available cars:\n";
        this.availableCars
        .forEach(c => res += `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$\n`);
        res = res.substring(0, res.length - 1);
        return res;
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        criteria === "model" ?
        this.soldCars.sort((a, b) => a.model.localeCompare(b.model)) :
        this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        let res = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        res += `-${this.soldCars.length} cars sold:\n`;
        this.soldCars
        .forEach(c => res += `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$\n`);
        res = res.substring(0, res.length - 1);
        return res;
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
