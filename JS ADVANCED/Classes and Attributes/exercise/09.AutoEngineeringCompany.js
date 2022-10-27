function produce(arr) {
    let company = new Map();

    arr.forEach(cur => {
        let [companyName, carModel, producedCars] = cur.split(" | ");
        producedCars = Number(producedCars);
        if (!company.has(companyName)) {
            company.set(companyName, new Map());
        }

        let models = company.get(companyName);
        if (!models.has(carModel)) {
            models.set(carModel, 0);
        }

        models.set(carModel, models.get(carModel) + Number(producedCars));
    });
    
    for(let comName of company.keys()) {
        console.log(comName);
        let models = company.get(comName);
        for (const model of models.keys()) {
            console.log(`###${model} -> ${models.get(model)}`);
        }
    }
}

produce(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);