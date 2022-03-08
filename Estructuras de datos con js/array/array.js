//const array = ["Diego", "Karen", "Oscar"];


//Con esto creamos una clase llamada miArray
//y creamos los metodos push y get a mano.
// class miArray{
//     constructor(){
//     this.length = 0;
//     this.data = {};
//     }
    
//     get(index){
//         return this.data[index];
//     }

//     Push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.data;
//     }

//     pop(item){
//         this.data[this]
//     }
// }

// const myArray = new miArray;


class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item
        this.length++
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length --;
        return lastItem;
    }

    delete(index) {
        const deletedItem = this.data[index];
        this.shiftIndex(index);
        return deletedItem;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length --
    }

    shift() {
        const item = this.data[0];
        this.shiftIndex(0);
        return item;    
    }

    unshift(item){
        for (let i = this.length; i>0; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[0] = item;
        this.length++;
    }
}

const miArray = new myArray();
console.log(miArray)