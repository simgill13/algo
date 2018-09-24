/* eslint-disable */
//Creates a new node
function createNode(data=null, next=null){
    return {
        data,
        next
    };
}

export class StackList {
    constructor() {
        this.top = null;
    }
    push(data) {
        // case for first item: this.top points to the node created
        if (this.top === null) {
            this.top = createNode(data)
            return;
        }
        //if not the first item, create a node with the next of top then change top to point to new node
        const node = createNode(data, this.top);
        this.top = node
    }
    peek() {
        if (this.top === null){
            return null
        }
        return this.top.data;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    display() {
        let node = this.top;
        while (node !== null) {
            console.log(node.data)
            node = node.next;
        }
    }
}

export class StackArray {
    constructor(){
        this.dataStore = [];
    }
    push(data) {
        this.dataStore.push(data);
    }
    pop() {
        return this.dataStore.pop();
    }
    display() {
        for (let i = this.dataStore.length - 1; i >= 0 ; i--) {
            console.log(this.dataStore[i]);
        }
    }
}
