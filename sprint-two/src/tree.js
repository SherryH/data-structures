var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};
//time complexity: Amortized O(1)

treeMethods.contains = function(target) {
  var answer = false;

  var testChildren = function(input) {
    if (input.value === target) {
      answer = true;
    } else if (input.children.length > 0) {
      for (var i = 0; i < input.children.length; i++) {
        testChildren(input.children[i]);
      }
    }
  };

  testChildren(this);
  return answer;
};
//time complexity: O(1)


/*
 * Complexity: What is the time complexity of the above functions?
 */
