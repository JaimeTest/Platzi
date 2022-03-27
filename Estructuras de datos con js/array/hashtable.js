class hashTable {
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i)*i) %this.data.length;
        }
        return hash;
    }

    set(key,value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data
    }

    get(key){
        const address = this.hashMethod(key);
        const arrayIn = this.data[address];
        if(arrayIn != null){
            for (let i = 0; i<arrayIn.length; i++){
                if (key === arrayIn[i][0]){
                    return arrayIn[i];
                }
            }
        }

        return undefined;
    }


    getAllKeys(){
        const allKeys = []
        for (let i = 0;i<this.data.length;i++){
            const arrayIn = this.data[i];
            if (arrayIn){
                for (let j = 0;j<arrayIn.length;j++){
                    allKeys[allKeys.length] = arrayIn[j][0];
                }                
            }
        }
        return allKeys;
    }

    remove(key){
        const address = this.hashMethod(key);
        const arrayIn = this.data[address];
        if(arrayIn){
            if(arrayIn.length == 1){
                delete this.data[address]
            }
            else{   
                for (let i = 0; i<arrayIn.length; i++){
                    if (key === arrayIn[i][0]){
                        for (let j = 0; j<arrayIn.length-1-i;j++){
                            this.data[address][i] = this.data[address][i+1]; 
                        } 
                    }
                }
                this.data[address].pop();

            }
        }
        return undefined;
    }
}

const myNewArray = new hashTable(50);

myNewArray.set("Carla",100);
myNewArray.set("Pedro",100);
myNewArray.set("Jaime",100);
myNewArray.set("Javier",100);
myNewArray.set("Jesus",100);
myNewArray.set("Laura",100);
myNewArray.set("Ana",100);
myNewArray.set("Aguilar",100);
myNewArray.set("Garcia",100);
myNewArray.set("Solis",100);
myNewArray.set("Carol",100);
myNewArray.set("Andres",100);
myNewArray.set("Mena",100);
myNewArray.set("Gual",100);
myNewArray.set("Gamboa",100);
myNewArray.set("Mario",100);
myNewArray.set("Mariela",100);
myNewArray.set("Sabrina",100);
myNewArray.set("Beto",100);
myNewArray.set("Raul",100);
myNewArray.set("Gilber",100);
myNewArray.set("Eduardo",100);
myNewArray.set("Miguel",100);
myNewArray.set("Amet",100);
myNewArray.set("Gavilla",100);
myNewArray.set("Zaragoza",100);
myNewArray.set("Somohano",100);
myNewArray.set("Carolina",100);
myNewArray.set("Uriel",100);
myNewArray.set("Nataly",100);
myNewArray.set("Isabel",100);
myNewArray.set("Ivonne",100);
myNewArray.set("Yamileth",100);
myNewArray.set("Alan",100);
myNewArray.set("Daniel",100);
myNewArray.set("Alejandro",100);

