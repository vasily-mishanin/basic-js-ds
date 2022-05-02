const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    //throw new NotImplementedError("Not implemented");
    return this.rootNode;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError("Not implemented");
    return searchInside(this.rootNode, data);

    function searchInside(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      return data < node.data
        ? searchInside(node.left, data)
        : searchInside(node.right, data);
    }
  }

  find(data) {
    //throw new NotImplementedError("Not implemented");
    return findInside(this.rootNode, data);

    function findInside(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        return findInside(node.left, data);
      } else {
        return findInside(node.right, data);
      }
    }
  }

  remove(data) {
    //throw new NotImplementedError("Not implemented");
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // delete exact this node.data
        // if no descendants -> remove node (node = null)
        // node is leaf
        if (!node.left && !node.right) {
          return null;
        }
        //node has not left child
        if (!node.left) {
          node = node.right;
          return node;
        }
        //node has not right child
        if (!node.right) {
          node = node.left;
          return node;
        }

        //node has both left and right child
        //take max from left and put it instead of node
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        //then delete maxFromLeft value from the tree
        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    //throw new NotImplementedError("Not implemented");
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    //throw new NotImplementedError("Not implemented");
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  leftTraverse(callback) {
    doLeft(this.rootNode, callback);

    function doLeft(node, callback) {
      if (node) {
        doLeft(node.left, callback);
        callback(node.data);
        doLeft(node.right, callback);
      }
    }
  }

  rightTraverse(callback) {
    doRight(this.rootNode, callback);

    function doRight(node, callback) {
      if (node) {
        doRight(node.right, callback);
        callback(node.data);
        doRight(node.left, callback);
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
