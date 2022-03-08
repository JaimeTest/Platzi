class addNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class myStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        const lastValue = this.top;
        return lastValue;
    }

    push(value) {
        const newNode = new addNode(value);
        
        if (this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        }

        else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
    }

    pop() {
        const deletedTop = this.top;
        this.top = this.top.next;

        return deletedTop;
    }
}