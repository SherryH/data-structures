var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  // obj.left = null;
  // obj.right = null;
  obj.value = value;

  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  var inputNode = BinarySearchTree(value);
  var findBranch = function(currentNode) {
    if (inputNode.value < currentNode.value) {
      if (currentNode.left) {
        findBranch(currentNode.left);
      } else {
        currentNode.left = inputNode;
      }
    } else if (inputNode.value > currentNode.value) {
      if (currentNode.right) {
        findBranch(currentNode.right);
      } else {
        currentNode.right = inputNode;
      }
    }
  };
  findBranch(this);
};

BinarySearchTree.prototype.contains = function(value) {
  var isPresent = false;
  var findNode = function(currentNode) {
    if (currentNode.value === value) {
      isPresent = true;
    } else if (value < currentNode.value) {
      if (currentNode.left) {
        findNode(currentNode.left);
      }
    } else if (value > currentNode.value) {
      if (currentNode.right) {
        findNode(currentNode.right);
      }
    }
  };
  findNode(this);
  return isPresent;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var cycleNode = function(currentNode) {
    cb(currentNode.value);
    if (currentNode.right) {
      cycleNode(currentNode.right);
    }
    if (currentNode.left) {
      cycleNode(currentNode.left);
    }
  };
  cycleNode(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
