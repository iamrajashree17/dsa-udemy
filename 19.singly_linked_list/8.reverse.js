class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val);
        
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }

    reverse(head) {
        let node = head;
        let prev = null; let next;

        while (node) {
            next = node.next;
            node.next = prev;
            // console.log(node.data, node.next)
            prev = node;
            console.log(node.data, node.next)
            node = next;   
            
        }
       this.head = prev;
        // console.log(node);
        // return head;
    }

    getList(i, head) {
        let counter = 1;
        let node = head;
        while(node) {
            if (counter === i) {
                return node;
            }
            counter++;
            node = node.next;
        }
    }
    
    deleteNode(head, x) {
        console.log(x,x,x)
        if (x===1)return head.next;
        
        let prevNode = this.getList(x-1, head);
        let removed = prevNode.next;
        prevNode.next = removed.next; 
        
        return head;
    }
}

let list = new SinglyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4); 
// list.reverse(list.head) 
// console.log(list.head.data);
// console.log(list.head.next.data);
// console.log(list.head.next.next.data);
// console.log(list.head.next.next.next.data);


// list.push(8);
// list.push(2);
// list.push(3);
// list.push(1);
// list.push(7);
// console.log(list.deleteNode(list.head, 1));


list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(1);
let newHead = list.deleteNode(list.head, 5); 
console.log(newHead.data);
console.log(newHead.next.data);
console.log(newHead.next.next.data);
console.log(newHead.next.next.next.data);
console.log(newHead.next.next.next.next);


// node 8.reverse.js