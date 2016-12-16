var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numTuples = 0;
  this._maxRatio = 0.75;
};

HashTable.prototype.reassign = function() {
  this._numTuples = 0;
  var tempStorage = Object.assign(this._storage);
  this._storage = LimitedArray(this._limit);

  for (var key in tempStorage) {
    if (tempStorage[key] !== undefined && !isNaN(parseInt(key))) {
      for (var j = 0; j < tempStorage[key].length; j++) {
        this.insert(tempStorage[key][j][0], tempStorage[key][j][1]);
      }
    }
  }
};
//time complexity: O(n)

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    this._storage[index].push([k, v]);
  }
  this._numTuples++;
  if ((this._numTuples / this._limit) > 0.75) {
    this._limit *= 2;
    this.reassign();
  }
};
//time complexity: amortized O(1)

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
  this._numTuples--;
  if ((this._numTuples / this._limit) < 0.25) {
    this._limit /= 2;
    this.reassign();
  }
};
//time complexity: amortized O(1)


/*
 * Complexity: What is the time complexity of the above functions?
 */


