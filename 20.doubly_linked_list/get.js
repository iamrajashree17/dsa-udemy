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

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter; let current;

        if (index <= this.length/2) {
            console.log("Working from Start");
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        } else {
            console.log("Working from End");
            counter = this.length - 1;
            current = this.tail;
            while(counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }
}

let list = new DoublyLinkedList();
list.push(10).push(15).push(20).push(25).push(30).push(35);
console.log(list);

console.log(list.get(-1));
console.log(list.get(10));
console.log(list.get(6));
console.log(list.get(1));
console.log(list.get(5));
console.log(list.get(3));

// node get.js