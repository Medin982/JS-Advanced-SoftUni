function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this;
        } else {
            return str + this;
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this;
        } else {
            return this + str;
        }
    }

    String.prototype.isEmpty = function() {
        if (this.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    String.prototype.truncate = function(n) {
        
    }
}