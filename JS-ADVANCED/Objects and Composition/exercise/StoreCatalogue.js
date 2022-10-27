function solve(data) {
    data.sort();
    let lastName = '';
    for (el of data) {
        let char = el.charAt(0);
        if (char !== lastName[0]) {
            console.log(`${char}`);
        }
        
        let current = el.split(" : ");
        console.log(`  ${current[0]}: ${current[1]}`);
        lastName = el;
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);