class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = length;
        this.innerString = '';
        this.innerLength = length;
    }

    decrease(value) {
        if ((this.innerLength - value) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
    }

    increase(value) {
        this.innerLength += value;
    }

    toString() {
        this.innerString = this.string;
        if (this.innerLength === 0) {
            return "...";
        }

        if (this.innerString.length > this.innerLength) {
            this.innerString = this.innerString.substring(0, this.innerLength);
            return this.innerString + "...";
        } else {
            return this.innerString;
        }

    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString());