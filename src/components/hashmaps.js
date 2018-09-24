/* eslint-disable */
class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this.slots = [];
        this.capacity = initialCapacity;
        this.deleted = 0;
    }
    static hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash
        }
        return hash >>> 0;
    }

    set (key, value) {
        const loadRatio = (this.length + 1) / this.capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this.resize(this.capacity * HashMap.SIZE_RATIO)
        }

        const index = this.findSlot(key);
        this.slots[index] = {
            key,
            value,
            deleted: false
        };
        this.length++
    }

    findSlot(key) {
        const hash = HashMap.hashString(key);
        const start = hash % this.capacity;

        for (let i =start; i < start + this.capacity; i++) {
            const index = i % this.capacity;
            const slot = this.slots[index];
            if (slot === undefined || (slot.key === key && !slot.deleted)) {
                return index;
            }
        }
    }

    get(key) {
        const index = this.findSlot(key);
        if (this.slots[index] === undefined) {
            return undefined
        }
        return this.slots[index].value;
    }

    remove(key) {
        const index = this.findSlot(key);
        const slot = this.slots[index];
        if (slot === undefined) {
            throw new Error ('Cannot remove somthin aint there')
        }
        slot.deleted = true;
        this.length --;
        this.deleted++;
    }

    resize(size) {
        const oldSlots = this.slots;
        this.capacity = size;
        this.length = 0;
        this.deleted = 0;
        this.slots = [];


        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.deleted) {
                this.set(slot.key, slot.value)
            }
        }
    }
}
HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;
export default HashMap;
