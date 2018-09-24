/* eslint-disable */
export class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right= null

    }

    insert(key, value) {
        if (this.key == null){
            this.key = key
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }

    get(key) {
        if (this.key == key) {
            return this.value
        }
        else if (key < this.key && this.left) {
            return this.left.get(key)
        }
        else if (key > this.key && this.right) {
            return this.right.get(key)
        }
        else {
            throw new Error(`Ain't no keys in the tree like that`)
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin()
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            }
            else if (this.left) {
                this._replaceWith(this.left)
            }
            else if (this.right) {
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        else if (key > this.key && this.right) {
            this.right.remove(key)
        }
        else {
            throw new Error(`That key is not there to remove`)
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node
            }
            else if (this == this.parent.right) {
                this.parent.right = node
            }
            if (node){
                node.parent = this.parent
            }
        }
        else {
            if (node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            }
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this
        }
        return this.left._findMin()
    }
}

export const findThirdLargest = (bst, state={number: 3, key: null}) => {
    if (bst.right) {
        findThirdLargest(bst.right, state)
        if (state.key) return state.key;
    }
    if (state.number > 0) {
        state.number--
    }
    if (state.number === 0) {
        state.key = bst.key
        return state.key;
    }
    if (bst.left) {
        return findThirdLargest(bst.left, state)
    }
    return state.key
}
