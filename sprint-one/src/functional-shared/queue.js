var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    count : 0
  };

  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {

  enqueue: function(input){
    this.count++;
    this[this.count] = input;
  },
  dequeue: function(){
    var keys = Object.keys(this);
    var numKeys = keys.filter(function(value){
      return !isNaN(parseInt(value));
    });
    var smallest = Math.min(...numKeys);
    var temp = this[smallest];
    delete this[smallest];
    return temp;
  },
  size: function(){
    return Object.keys(this).length - 4;
  },
};


