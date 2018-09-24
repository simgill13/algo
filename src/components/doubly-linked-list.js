class DoubleLinkList {
  constructor() {
      this.length = 0;
      this.head = null;
  }
  insert(index, value) {
      if (index < 0 || index > this.length) {
          throw new Error('Index Error')
      }

      const newNode = {
          value,
          next,
          previous
      };
      if (index == 0) {
          newNode.next = this.head;
          this.head = newNode
      }
      else {
          const node = this._find(index - 1);
          newNode.next = node.next;
          newNode.prvious = node;
          node.next = newNode;
      }

      this.length++;
  }

  _find(index) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
          node = node.next
      }
      return node
  }

  get(index) {
      if (index < 0 || index > this.length) {
          throw new Error('Index error');
      }
      return this._find(index).value
  }

}

export default DoubleLinkList;
