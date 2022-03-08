class addNode {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class myBinarySearchTree {
    constructor(){
        this.root = null;

    }

    insert(value) {
        const newNode = new addNode(value);
        if(this.root == null) {
            this.root = newNode;
        }

        else {
            let currentNode = this.root;
            while(true){
                if (value < currentNode.value){
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left;
                }

                else{
                    if(currentNode.right == null) {
                        currentNode.right = newNode;
                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    }

    getNode(value){
        let actualNode = this.root;
        while(true) {

            if (actualNode == null){
                console.log("No existe el valor");
                return
            }
            
            if(actualNode.value == value){
                return actualNode;
            }

            if(value < actualNode.value) {
                actualNode = actualNode.left;
            }

            else {
                actualNode = actualNode.right;
            }
        }
    }
}

const tree = new myBinarySearchTree()