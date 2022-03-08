class addNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class myQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        const lastValue = this.first;
        return lastValue;
    }

    enqueue(value) {
        const newNode = new addNode(value);

        if(this.length == 0){
            this.first = newNode;
            this.last = newNode;
        }

        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;
    }


    dequeue() {
        const firstHolder = this.first.next
        this.first = firstHolder

        this.length--;

        return firstHolder;
    }
}

