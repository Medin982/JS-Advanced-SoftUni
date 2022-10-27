function solve(input) {
    let res = [];
    for (ele of input) {
        let [command, text] = ele.split(" ");
        switch (command) {
            case "add":
                res.push(text);
                break;
            case "remove":
                for (let cur of res) {
                    if (cur === text) {
                        let index = res.indexOf(text);
                        res.splice(index, 1);
                    }
                }
                break;
            case "print":
                console.log(res.join(","));
                break;
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);