var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.count = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(input) {
    this[this.count] = input;
    this.count++;
  },
  dequeue: function() {
    var keys = Object.keys(this);
    var numKeys = keys.filter(function(item) {
      return !(isNaN(parseInt(item)));
    });
    var smallest = Math.min(...numKeys);
    var temp = this[smallest];
    delete this[smallest];
    return temp;

  },
  size: function() {
    return Object.keys(this).length - 1;
  }
};


