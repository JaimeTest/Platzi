class addNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class myDoublyLinkedList {
    constructor(value){
        this.head ={
            value:value,
            next:null,
            prev:null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new addNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++

        return this
    }

    prepend(value){
        const newNode = new addNode(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }



    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    
    insert(index,value) {
        if(index>=this.length) {
            this.append(value);
        }

        const newNode = new addNode(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    remove(index) {
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = holdingPointer.next;

        this.length--;

        return this;
    }
}

const newLinkedList = new myDoublyLinkedList(0)
newLinkedList.append(1);
newLinkedList.append(2);
newLinkedList.append(4);
newLinkedList.append(9);
newLinkedList.append(5);
newLinkedList.append(8);