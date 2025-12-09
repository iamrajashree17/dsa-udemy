class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    unshift(val) {
        let node = new Node(val);

        if(!this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(10).push(15).push(20).push(25);
console.log(list);
list.unshift(5);
console.log(list)
list.unshift(0);
console.log(list)

// node shift.js

// node unshift.js