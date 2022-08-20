function Node(val, next = null) {
    this.data = val;
    this.next = next;
}


function SinglyLinkedList() {
    this.head = new Node("head");
}

SinglyLinkedList.prototype.find = function(idx) {
    if(!this.head) return undefined;
    let runner = this.head;
    let count = 0;
    while(count < idx) {
        runner = runner.next;
        count++;
    }
    return runner
} 

SinglyLinkedList.prototype.insert = function(idx, val) {
    let nodeToInsert = new Node(val);
    let insertNode = this.find(idx - 1);
    nodeToInsert.next = insertNode.next;
    insertNode.next = nodeToInsert
}

SinglyLinkedList.prototype.push = function(val) {
    if(!this.head){
        let newNode = new Node(val)
        this.head = newNode;
        return newNode;
    }
    let newNode = new Node(val, this.head)
    this.head = newNode;
    return newNode;
}

SinglyLinkedList.prototype.printAll = function() {
    if(!this.head) return undefined;
    let runner = this.head;
    while(runner.next) {
        console.log(runner.data)
        runner = runner.next;
    }
}

SinglyLinkedList.prototype.remove = function(val) {
    let prevNode = this.find(val - 1);
    let itemToRemove = this.find(val);
    prevNode.next = itemToRemove.next;
    return itemToRemove;
}

let node1 = new Node(9)
let lList = new SinglyLinkedList();
lList.push(5)
lList.insert(1, 5)
lList.insert(1, 9)
lList.insert(2, 6)
lList.insert(1,10)
lList.insert(1, 100)
lList.push(3)
lList.remove(2)
lList.printAll();
// console.log(lList)
