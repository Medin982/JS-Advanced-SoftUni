
function solve(arr, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let res = [];

    for (let ele of arr) {
        let [destination, price, status] = ele.split("|");
        res.push(new Ticket(destination, Number(price), status));
    }

    switch (sortCriteria) {
        case "destination":
            res.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            res.sort((a, b) => a.price - b.price);
            break;
        case "status":
            res.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return res;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));