class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

class SLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addFront(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    removeFront() {
        if(!this.head) return undefined;
        if(this.head.next === null) {
            this.head = null;
            this.length = 0;
            return this.head;
        } 
        this.head = this.head.next;
        this.length--;   
        return this.head;
    }

    printList() {
        if(!this.head) {
            console.log("List is empty")
            return undefined;
        }
        let runner = this.head;
        while(runner){
            console.log(runner.data);
            runner = runner.next;
        }
        return runner;
    }

    frontValue() {
        if(!this.head) return undefined;
        return this.head.data;
    }

    findSum() {
        if(!this.head) return undefined;
        let sum = 0;
        let runner = this.head;
        while(runner) {
            sum += runner.data;
            runner = runner.next;
        }
        return sum;
    }

    containsValue(val) {
        if(!this.head) return null;
        let runner = this.head;
        while(runner){
            if(runner.data === val) return true;
            runner = runner.next;
        }
        return false;
    }

    length() {
        if(!this.head) return 0;
        let runner = this.head;
        let count = 0;
        while(runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }
}

sll = new SLinkedList();
sll.addFront(3)
sll.addFront(4)
sll.addFront(6)
sll.removeFront();
sll.addFront(8)
sll.addFront(10)
sll.addFront(12)
console.log(`Front Value ${sll.frontValue()}`)
console.log(`The sum of all values is ${sll.findSum()}`)
console.log(`The list contains 15 ? ${sll.containsValue(15)}`)
console.log(`The length of ${sll.length} better match ${sll.length}`)

sll.printList();