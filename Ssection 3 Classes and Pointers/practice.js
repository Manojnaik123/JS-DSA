// linked list

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        var newNode = new Node(value);
        this.tail = newNode;
        this.head = newNode;
        this.length = 1
    }

    push(value){
        var newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }


    pop(){
        if (this.length === 0) return undefined
        var temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            var prev;
            while(temp.next){
                prev = temp;
                temp = temp.next;
            }
            this.tail = prev;
            this.tail.next = null;
        }
        this.length--
        return temp
    }

    unShift(value){
        var newNode = new Node(value);
        if(this.length === 0){
            this.tail = newNode
        } else {
            newNode.next = this.head
        }
        this.head = newNode
        this.length++
        return this
    }

    shift(){
        if(this.length === 0) return undefined 
        var temp = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
           this.head = this.head.next
           temp.next= null
        }
        this.length--
        return temp 
    }

    get(index){
        if( index < 0 || index >= this.length) return undefined
        var temp = this.head
        var i = 0
        while(i< index){
            temp = temp.next
            i++
        }
        return temp
    }

    set(value, index){
        var node = this.get(index)
        if(node){
            node.value = value
            return true
        } 
        return false        
    }

    insert(index, value){
        if (index === 0) return this.unShift(value)
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return undefined 

        var newNode = new Node(value);
        var prevNode = this.get(index-1);
        newNode.next = prevNode.next
        prevNode.next = newNode

        this.length++
        return this
    }

    reverse(){
        if(this.length === 0) return false
        
        var temp = this.head
        this.head = this.tail
        this.tail = temp

        var prev = null
        var next = null

        while(temp){
           next = temp.next;
           temp.next = prev;
           prev = temp
           temp = next
        }

        return true
    }
}


var ll = new LinkedList(1)

//------------------------------------------------------------------------------------------------------------
//----------------------------------------- Doubly Linked list -----------------------------------------------
//------------------------------------------------------------------------------------------------------------

class DoublyNode{
    constructor(value){
        this.prev = null
        this.next = null
        this.value = value
    }
}


class DoubleLinkedList{
    constructor(value){
        var newNode = new DoublyNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        var newNode = new DoublyNode(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        var temp = this.tail;
        if(this.length === 1){
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

    unShift(value){
        var newNode = new DoublyNode(value);
        if(this.length === 0){
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

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var temp = this.head;

        var i = 0;
        while(i < index){
            temp = temp.next;
            i++
        }
        return temp;
    }

    set(index, value){
        var node = this.get(index);
        if(node){
            node.value = value;
            return true;
        } 
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.unShift(value);
        if(index === this.length) return this.push(value);

        var newNode = new DoublyNode(value);
        var temp = this.get(index);
        
        newNode.next = temp;
        temp.prev.next = newNode;
        newNode.prev = temp.prev;
        temp.prev = newNode;
        this.length++;
        return this;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return shift();
        if(index === this.length - 1) return this.pop();
        
        var temp = this.get(index);
        temp.next.prev = temp.prev;
        temp.prev.next = temp.next;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }

    reverse(){
        if(this.length === 0) return false;
        if(this.length === 1) return true;

        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;


        var prev = null;
        var next = null;

        while(temp){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
            prev.prev = temp;
        }

        return true;
    }
}

var dll = new DoubleLinkedList(0)
dll.push(1)
dll.push(2)

var temp = dll.head

while(temp){
    console.log(temp.prev);
    console.log(temp.value);
    console.log(temp.next);
    console.log('----------------------------------');
    temp = temp.next
}







