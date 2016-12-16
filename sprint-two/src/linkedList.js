var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var n = Node(value);
    if (list.head === null) {
      list.head = n;
    } else {
      list.tail.next = n;
    }
    list.tail = n;
  };
  //time complexity: O(1)

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };
  //time complexity: O(1)

  list.contains = function(target) {
    var current = list.head;
    var contained = false;

    while (contained === false) {
      if (current === null) {
        break;
      }
      if (current.value === target) {
        contained = true;
      }
      current = current.next;
    }
    return contained;
  };
  //time complexity: O(n)

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
