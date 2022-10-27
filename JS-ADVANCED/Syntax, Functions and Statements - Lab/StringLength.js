function stringLength(a, b, c) {
    let sumLength = a.length + b.length + c.length;
    let averageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');

stringLength('pasta', '5', '22.3');