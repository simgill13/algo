function createNode (data=null, next=null, prev=null) {
    return {
        data,
        next,
        prev
    }
}

export class QueueList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = createNode(data)
        //if this.last isn't null make the new node's next equal the last node's last (which was null) and change the last.
        if (this.last) {
            node.next  = this.last;
            this.last.prev = node;
        }
        this.last = node;
        if (this.first === null) {
            this.first = node;
        }
    }

    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last = null;
        }
        return node.data
    }

    display() {
        let node = this.first;
        while(node !== null) {
            console.log(node.data);
            node = node.prev
        }
    }
}

export class QueueArray {
    constructor(){
        this.dataStore = []
    }

    enqueue(data) {
        return this.dataStore.push(data);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    display() {
        for (let i = 0; i < this.dataStore.length; i++) {
            console.log(this.dataStore[i]);
        }
    }
}
