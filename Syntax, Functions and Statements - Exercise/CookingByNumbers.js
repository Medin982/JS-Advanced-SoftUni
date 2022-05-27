function calculeteNumber(number, operators1, operators2,
    operators3, operators4, operators5) {
    let listOperators = [operators1, operators2, operators3, operators4, operators5];
    for (let i = 0; i < listOperators.length; i++) {
        switch (listOperators[i]) {
            case 'chop':
                 number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                 number *= 0.80;
                break;
        }
        console.log(number);
    }
}

calculeteNumber(9, 'dice', 'spice', 'chop', 'bake', 'fillet');