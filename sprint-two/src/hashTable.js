var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    this._storage[index].push([k, v]);
  }
};
//time complexity: O(1)

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieved;
  if (this._storage[index] !== undefined) {
    (this._storage[index]).forEach(function(tuple) {
      if (tuple[0] === k) {
        retrieved = tuple[1];
      }
    });
  }
  return retrieved;
};
//time complexity: O(1)

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
  if (this._storage[index] !== undefined) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].splice(i, 1);
      }
    }
  }
};
//time complexity: O(1)



/*
 * Complexity: What is the time complexity of the above functions?
 */


