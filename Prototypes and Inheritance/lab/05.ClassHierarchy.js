function solve() {
    class Figure {
        constructor(units = "cm") {
            this.units = units;
        }

        scaleParam(param) {
            switch (this.units) {
                case 'm':
                    param /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    param *= 10;
                    break;
                default:
                    break;
            }
            return param;
        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius() {
            return this.scaleParam(this._radius);
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        } 

        get width() {
            return this.scaleParam(this._width);
        }

        get height() {
            return this.scaleParam(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure, 
        Circle, 
        Rectangle
    }
}

let res = solve();
let Circle = res.Circle;
let Rectangle = res.Rectangle;

let c = new Circle(5);
console.log(c.area);
console.log(c.toString());

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString());