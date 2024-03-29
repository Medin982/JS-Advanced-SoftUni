function createSortedList() {
    let collection = [];
    let res = {
        add,
        remove,
        get,
        size: 0
    }
    return res;

    function add(num) {
        collection.push(num);
        this.size++;
        collection.sort((a, b) => a - b);
    }

    function remove(index) {
        let valid = checkIndex(index);
        if (valid) {
            collection.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        let valid = checkIndex(index);
        if (valid) {
            return collection[index];
        }
    }

    function checkIndex(index) {
        return index >= 0 && index < collection.length;
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
