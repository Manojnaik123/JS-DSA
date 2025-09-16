export default class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        var temp = this.head;
        var pre;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        if (this.tail) this.tail.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unShift(value) {
        var newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        var temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        var temp = this.head;
        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        var temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0){
            this.unShift(value);
            return true;
        }
        if(index === this.length){
            this.push(value);
            return true;
        }

        var newNode = new Node(value);
        var current = this.get(index - 1);
        newNode.next = current.next;
        current.next = newNode;

        this.length++
        return true;
    }

    remove(index){
        if (index < 0 || index >= this.length) return false;
        if(index === 0) {
            this.shift();
            return true;
        } 
        if(index === this.length - 1){
            this.pop();
            return true; 
        }

        var prev = this.get(index - 1);
        var current = this.get(index);

        prev.next = current.next;
        current.next = null;

        this.length--;
        return true;
    }

    reverse() {
        // swaps head and tail
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        //created new variable pointers
        //var temp = this.tail; // no need because we can use previous unused variable temp.
        var prev = null;
        var next;

        for (var i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

let myList = new LinkedList(1);

myList.push(2); // adds element at the end of the LL
myList.pop(); // removes element from the end of the LL

myList.unShift(2); // adds element from the begining of the LL
myList.shift(); // removes element from the begining of the LL

myList.get(0); // gets the node by the index
myList.set(0, 3); // changes the value of the node by the given index 

myList.remove(0); // removes node from the index
myList.insert(1, 4); // inserts new node at the given index

myList.reverse(); // reverses the LL