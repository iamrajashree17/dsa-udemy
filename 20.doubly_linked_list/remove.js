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
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        } else {
            counter = this.length - 1;
            current = this.tail;
            while(counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }

    shift() {
        if(!this.head) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;
        this.head.prev = null;

        oldHead.next = null;
        this.length--;
        return oldHead;
    }

    pop() {
      if(!this.head) return undefined;
      
      let oldTail = this.tail;
      this.tail = oldTail.prev;
      this.tail.next = null;
      
      oldTail.prev = null;
      this.length--;
      return oldTail;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();

        let node = this.get(index);
        let previousNode = node.prev;
        let afterNode = node.next;

        previousNode.next = afterNode;
        afterNode.prev = previousNode;

        node.next = null;
        node.prev = null;

        this.length--;
        return true;
    }
}

let list = new DoublyLinkedList();
list.push(10).push(15).push(20).push(25).push(30).push(35);

console.log(list.remove(-1));
console.log(list.remove(10));
console.log(list.remove(7));
console.log(list.remove(0));
console.log(list.head.val, list.length);
console.log(list.remove(4));
console.log(list.tail.val);

// node remove.js