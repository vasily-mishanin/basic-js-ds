const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = new ListNode(); // original data
    this.pointer = this.queue; // pointer to manage data in the list
  }
  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    return this.queue;
  }

  enqueue(value) {
    // throw new NotImplementedError("Not implemented");
    if (this.pointer.value && this.pointer.next === null) {
      this.pointer.next = new ListNode();
      this.pointer = this.pointer.next;
    }
    this.pointer.value = value;
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    let firstInQueue = this.queue.value;
    delete this.queue.value;
    this.queue = this.queue.next;
    return firstInQueue;
  }
}

module.exports = {
  Queue,
};
