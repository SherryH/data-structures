var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj ={
    count : 0
  };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(input){
    this[this.count+1] = input;
    this.count++;
  },
  pop: function(){
    var temp = this[this.count];
    delete this[this.count];
    if (this.count > 0){
      this.count--;
    }
    return temp;
  },
  size: function(){
    return this.count;
  }
};


