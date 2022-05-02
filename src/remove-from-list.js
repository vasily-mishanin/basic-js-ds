const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  //   // throw new NotImplementedError('Not implemented');

  let partOfList = list; // like pointer inside List

  //   // remove all value===k from BEGINNING of list
  while (list.value === k) {
    list = list.next;
  }

  while (partOfList.next !== null) {
    if (partOfList.next.value === k) {
      partOfList.next = partOfList.next.next;
    } else {
      partOfList = partOfList.next;
    }
  }
  while (list.value === k) {
    list = list.next;
  }

  return list;
}

// let list = {
//   value: 3,
//   next: {
//     value: 7,
//     next: {
//       value: 3,
//       next: {
//         value: 7,
//         next: {
//           value: "last",
//           next:null
//         },
//       },
//     },
//   },
// };

module.exports = {
  removeKFromList,
};
