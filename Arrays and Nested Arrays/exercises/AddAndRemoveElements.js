function solve(commands) {
    let result = [];
    let num = 0;
    commands.forEach(element => {
        switch (element) {
            case 'add':
                num++;
                result.push(num)
                break;
            default:
                num++
                result.pop();
                break;
        }
    });

    if(result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join("\n"));
    }
}

solve(['remove', 
'remove', 
'remove']);