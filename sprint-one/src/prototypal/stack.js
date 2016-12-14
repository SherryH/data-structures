var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.count = 0;
  return obj;
};

var stackMethods = {
  push: function(input) {
    this[this.count] = input;
    this.count++;
  },
  pop: function() {
    var temp = this[this.count - 1];
    delete this[this.count - 1];
    this.count--;
    return temp;
  },
  size: function() {
    return Object.keys(this).length - 1;
  }
};
