var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Queue.prototype.enqueue = function(input) {
  this[this.count] = input;
  this.count++;
};
Queue.prototype.dequeue = function() {
  var keys = Object.keys(this);
  var numKeys = keys.filter(function(item) {
    return !isNaN(parseInt(item));
  });
  var smallest = Math.min(...numKeys);
  var temp = this[smallest];
  delete this[smallest];
  return temp;
};
Queue.prototype.size = function() {
  return Object.keys(this).length - 1;
};
