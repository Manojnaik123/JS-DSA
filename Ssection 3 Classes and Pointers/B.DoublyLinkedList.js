class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {                             // my code
        if (!this.head) return undefined;
        var temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }

        var pre = this.tail.prev;
        this.tail.prev = null;
        pre.next = null;
        this.tail = pre;

        this.length--;
        return temp;
    }

    pop_alt() {                                // instructors code
        if (this.length === 0) return undefined;
        var temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unShift(value) {                    // my code with little changes with the help of the GPT
        const newNode = new Node(value);
        if (!this.head) {                // Instructor has use (this.length === 0) condition. 
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {              // my code with no changes
        if (!this.head) return undefined;     // instructor has used condition (this.length === 0) thats it.

        var temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    get(index) {        // my code added on more condition in the if that is this.length === 0 which is redundant

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

    insert(index, value) {            // my code 
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unShift(value);


        const newNode = new Node(value);
        var temp = this.get(index);

        temp.prev.next = newNode;
        newNode.next = temp;
        newNode.prev = temp.prev;
        temp.prev = newNode;

        this.length++;
        return true;
    }

    insert_alt(index, value) {
        if (index === 0) return this.unShift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const before = this.get(index - 1);
        const after = this.get(index);

        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {             // my code. I ussed some unnecessary if check which were redundant. Indentified and removed them using gpt.
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var temp = this.get(index);
        var before = temp.prev;

        before.next = temp.next;
        temp.next.prev = before;

        temp.next = null;
        temp.prev = null;


        this.length--;
        return temp;
    }

    remove_alt(index) {                    // instructorrs code. 
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const temp = this.get(index);

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;

        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }
}

const mylist = new DoublyLinkedList(1);
mylist.push(2);
mylist.push(3);

mylist.remove(1);
mylist.remove(1);
mylist.remove(0);


console.log(mylist);


// var t = mylist.head;

// for (let index = 0; index < mylist.length; index++) {
//     console.log(t.value+'\n');
//     t = t.next;
// }
