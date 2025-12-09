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

    unshift(val) {
        let node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

   insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length-1) return !!this.push(val);

    let node = new Node(val);

    let previousNode = this.get(index - 1);
    let afterNode = previousNode.next;

    previousNode.next = node; node.prev = previousNode;
    node.next = afterNode; afterNode.prev = node;

    this.length++;
    return true;
   }
}

let list = new DoublyLinkedList();
list.push(10).push(15).push(20).push(25).push(30).push(35);
console.log(list);
console.log(list.insert(-1, 12));
console.log(list.insert(10, 12));
console.log(list.insert(7, 40));
console.log(list.insert(1, 12));
console.log(list.head.next);
console.log(list.head.next.next);

// node insert.js