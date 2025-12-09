class Node {
    constructor(val) {
        this.val = val;
        this.head = null;
        this.tail = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let list = new DoublyLinkedList();list
console.log(list);

// node setup.js