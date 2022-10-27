function solve(...params) {
    let res = {};
    for (let ele of params) {
        let type = typeof (ele);
        console.log(`${type}: ${ele}`);

        if (!res.hasOwnProperty(type)) {
            res[type] = 0;
        }

        res[type]++;
    }

    let buff = '';
    for (let [k, v] of Object.entries(res)) {
        buff += `${k} = ${v}\n`;
    }

    console.log(buff);
}

solve('cat', 42, function () { console.log('Hello world!'); });