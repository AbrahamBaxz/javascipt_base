//Class Node
//Class LinkedList
/*
head
push
traverse
pop
forEach
shift
*/

//Queue
//Stack

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
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
  }

  traverse() {
    if (!this.head) return [];
    if (!this.head.next) return [this.head.value];

    let collection = [];
    let pointer = this.head;

    while (pointer !== null) {
      collection.push(pointer.value);
      pointer = pointer.next;
    }

    return collection;
  }

  pop() {
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
  }

  forEach(callback) {
    if (!this.head) return;

    let pointer = this.head;

    while (pointer !== null) {
      callback(pointer.value);
      pointer = pointer.next;
    }

    return;
  }

  shift() {
    if (!this.head) return null;

    let first_node = this.head;
    this.head = this.head.next;

    return first_node.value;
  }

  bubble() {
    let temp = null;
    if (!this.head) return;

    if (!this.head.next) return;

    if (!this.head.next.next) {
      if (this.head.value > this.head.next.value) {
        temp = this.head.value;
        this.head.value = this.head.next.value;
        this.head.next.value = temp;
      }
      return;
    }

    let pointer = this.head;
    let loopAgain = false;
    while (pointer.next !== null) {
      if (pointer.value > pointer.next.value) {
        //swap
        temp = pointer.value;
        pointer.value = pointer.next.value;
        pointer.next.value = temp;
        loopAgain = true;
      }

      if (!pointer.next.next && loopAgain) {
        //loop back
        pointer = this.head;
        loopAgain = false;
      } else pointer = pointer.next;
    }
  }

  insert() {
    let temp = null;
    let temp_head = null;
    if (!this.head) return;

    if (!this.head.next) return;

    if (!this.head.next.next) {
      if (this.head.value > this.head.next.value) {
        temp = this.head.value;
        this.head.value = this.head.next.value;
        this.head.next.value = temp;
      }
      return;
    }

    let pointer = this.head;

    temp_head = {
      value: pointer.value,
      next: null,
    };
    while (pointer.next !== null) {
      if (pointer.value > pointer.next.value) {
        let node = {
          value: pointer.next.value,
          next: temp_head,
        };
        temp_head = node;
      } else {
        let node = {
          value: pointer.next.value,
          next: null,
        };
        let p2 = temp_head;

        while (p2.next !== null) {
          p2 = p2.next;
        }
        p2.next = node;
      }
      pointer = pointer.next;
    }
    this.head = temp_head;

    // let pointer = this.head.next;

    // temp_head = {
    //   value: pointer.value,
    //   next: null,
    // };

    // let p2 = null;
    // let p3 = null;
    // while (pointer !== null) {
    //   p2 = temp_head;
    //   p3 = temp_head.next;

    //   do {
    //     if (p3 === null && p2.value < pointer.value) {
    //       p3 = {
    //         value: pointer.value,
    //         next: null,
    //       };
    //       break;
    //     }
    //     if (p3 === null && p2.value > pointer.value) {
    //       let node = {
    //         value: pointer.value,
    //         next: temp_head.next,
    //       };
    //       node = temp_head;
    //       break;
    //     }

    //     p2 = p2.next;
    //     p3 = p3 ? p3.next : null;
    //   } while (p3);

    //   pointer = pointer.next;
    // }
    // this.head = temp_head;
  }

  insert2() {
    if (!this.head) return;
    if (!this.head.next) return;

    let p = this.head.next;

    let temp_head = {
      value: this.head.value,
      next: null,
    };
    let p2 = temp_head;
    let p3 = temp_head.next;
    while (p !== null) {
      p2 = temp_head;
      p3 = temp_head.next;

      //loop
      while (p2 !== null) {
        //conditions
        if (p3 !== null && p2.value > p.value && p3.value > p.value) {
          let node = {
            value: p.value,
            next: p2,
          };
          temp_head = node;
          break;
        }

        if (p3 !== null && p2.value < p.value && p3.value > p.value) {
          let node = {
            value: p.value,
            next: p3,
          };
          p2.next = node;
          break;
        }

        if (p2.value < p.value && p3 === null) {
          //console.log(" LinkedList -> if1 ");
          p2.next = {
            value: p.value,
            next: null,
          };
          break;
        }

        if (p2.value > p.value && p3 === null) {
          let node = {
            value: p.value,
            next: p2,
          };
          temp_head = node;
          break;
        }

        // move
        p2 = p2.next;
        p3 = p2 ? p2.next : null;
      }
      p = p.next;
    }
    this.head = temp_head;
    ///temp_head = null;
  }

  merge() {
    if (!this.head) return;

    if (!this.head.next) return;

    if (!this.head.next.next) {
      if (this.head.value > this.head.next.value) {
        temp = this.head.value;
        this.head.value = this.head.next.value;
        this.head.next.value = temp;
      }
      return;
    }

    // break list
    let nodeCollection = [];
    let pointer = this.head;

    while (pointer !== null) {
      nodeCollection.push({
        value: pointer.value,
        next: null,
      });
      pointer = pointer.next;
    }

    // organize list
    let ii = 0;
    let loop = false;
    let temp = null;
    while (ii < nodeCollection.length) {
      if (
        ii !== nodeCollection.length - 1 &&
        nodeCollection[ii].value > nodeCollection[ii + 1].value
      ) {
        temp = nodeCollection[ii];
        nodeCollection[ii] = nodeCollection[ii + 1];
        nodeCollection[ii + 1] = temp;
        loop = true;
      }

      if (ii + 2 === nodeCollection.length && loop) {
        ii = -1;
        loop = false;
      }
      ii++;
    }

    // merge nodes
    let i = 0;
    let temp_head = null;
    let p = temp_head;

    while (i < nodeCollection.length) {
      const node = nodeCollection[i];

      if (!p) {
        p = node;
        temp_head = p;
      } else {
        while (p.next !== null) {
          p = p.next;
        }
        p.next = node;
      }
      i++;
    }

    this.head = temp_head;
  }
}

export const generateRandomListValues = (list, n) => {
  for (let x = 0; x <= n; x++) {
    const random_number = Math.floor(Math.random() * n);
    list.push(random_number);
  }
};

let bob = new LinkedList();

generateRandomListValues(bob, 1000);

// bob.push(9);
// bob.push(8);
// bob.push(6);
// bob.push(5);
// bob.push(2);
// bob.push(1);

console.log(bob.traverse());
//bob.insert2();
//bob.insert();
//bob.bubble();
//bob.merge();
bob.forEach((item) => console.log(item));
