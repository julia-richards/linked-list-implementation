// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    this.tail.next = new Node(value);
    this.length++;
  }

  // TODO: Implement the removeTail method here * WILL COME BACK TO
  removeTail() {
    this.tail = null;
  }

  // TODO: Implement the addToHead method here
  addToHead(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      this.add(value);
    }
  }

  add(value) {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node();
  }

  // TODO: Implement the removeHead method here
  removeHead() {}

  // TODO: Implement the contains method here
  contains(target) {}

  // TODO: Implement the get method here
  get(index) {}

  // TODO: Implement the set method here
  set(index, value) {}

  // TODO: Implement the insert method here
  insert(index, value) {}

  // TODO: Implement the remove method here
  remove(index) {}

  // TODO: Implement the size method here
  size() {
    let curr = this.head;
    let length = 0;

    while (curr) {
      curr = curr.next;

      length++;
    }

    return length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
