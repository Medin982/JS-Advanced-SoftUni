
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        const distanceX = p1.x - p2.x;
        const distanceY = p1.y - p2.y;
        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));