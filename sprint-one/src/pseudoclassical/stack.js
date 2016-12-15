var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};


Stack.prototype.push = function(input) {
  this[this.count] = input;
  this.count++;
};
Stack.prototype.pop = function() {
  var temp = this[this.count - 1];
  delete this[this.count - 1];
  if (this.count > 0) {
    this.count--;
  }
  return temp;
};
Stack.prototype.size = function() {
  return this.count;
};
