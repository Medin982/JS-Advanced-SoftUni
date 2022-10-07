function solve(input, criteria) {
    let [prefix, value] = criteria.split("-");
    let count = 0;

    JSON.parse(input).forEach(element => filter.call(element));

    function filter() {
        if (this[prefix] === value || criteria === 'all'){
            return console.log(`${count++}. ${this.first_name} ${this.last_name} - ${this.email}`);
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);