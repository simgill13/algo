import LinkedList from './linked-list';

class ChainMap {
    constructor() {
        this.slots = [];
        this.length = 0;
        this.capacity = 10;
    }

    static _hashString(string) {
        let hash = 0;
        for (let i=0; i<string.length; i++) {
            hash += string.charCodeAt(i)
        }
        return hash % 10;
    }

    set(key, value) {
        const index = ChainMap._hashString(key);
            if (this.slots[index]) {
                this.slots[index].insert(0, {[key]: value})
            }
            else {
                let list = new LinkedList()
                list.insert(0, {[key]: value})
                this.slots[index] = list
            }
        this.length++
    }

    get(key) {
        const index = ChainMap._hashString(key);
        if(this.slots[index] === undefined){
            return "Error rrr"
        }
        else {
            for (var i = 0; i < this.slots[index].length; i++) {
                let val = this.slots[index].get(i)
                if (key in val) {
                    return val[key]
                }
            }
        }
    }
}

export default ChainMap
