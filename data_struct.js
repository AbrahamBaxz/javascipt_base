console.log("DATA STRUCT");

/*
linear data structure:
    static data structure:
        array
      
    dynamic data stucture:
        queue = First in First out(FIFO)
        stack = Last in First out(LIFO)
        linked list = 
*/

const list = {
  head: null,
  push: function (value) {
    const node = {
      value,
      next: null,
    };

    if (!this.head) {
      this.head = node;
      return value;
    }

    let pointer = this.head;

    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = node;
    return value;
  },
  traverse: function () {
    if (!this.head) return [];
    if (!this.head.next) return [this.head.value];

    let collection = [];
    let pointer = this.head;

    while (pointer !== null) {
      collection.push(pointer.value);
      pointer = pointer.next;
    }

    return collection;
  },
  pop: function () {
    if (!this.head) return null;

    let pointer = this.head;
    let last_node = null;

    if (!this.head.next) {
      last_node = this.head;
      this.head = null;
      return last_node.value;
    }

    while (pointer.next !== null) {
      if (!pointer.next.next) {
        pointer = pointer;
        last_node = pointer.next;
        break;
      } else {
        pointer = pointer.next;
      }
    }

    pointer.next = null;
    return last_node.value;
  },
  forEach: function (callback) {
    if (!this.head) return;

    let pointer = this.head;

    while (pointer !== null) {
      callback(pointer.value);
      pointer = pointer.next;
    }

    return;
  },
};

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
console.log(list.head);
list.pop();
console.log(list.traverse());

list.forEach((item) => console.log(item));

/*
non linear data structure:
 */
