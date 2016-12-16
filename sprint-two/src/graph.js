// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};
//time complexity: O(1)

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node] !== undefined) {
    return true;
  }
  return false;
};
//time complexity: O(1)

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this[node].length; i++) {
    var key = this[node][i];
    var index = this[key].indexOf(node);
    this[key].splice(index, 1);
  }
  delete this[node];
};
//time complexity: O(2n^2) --> O(n^2)

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this[fromNode].includes(toNode));
};
//time complexity: O(n)

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};
//time complexity: O(n)

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toIndex = this[fromNode].indexOf(toNode);
  var fromIndex = this[toNode].indexOf(fromNode);
  this[fromNode].splice(toIndex, 1);
  this[toNode].splice(fromIndex, 1);
};
//time complexity: O(n)

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (parseInt(key)) {
      cb(key);
    }
  }
};
//time complexity: O(n^2)

/*
 * Complexity: What is the time complexity of the above functions?
 */


