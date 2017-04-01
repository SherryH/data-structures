// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var obj = Object.create(queueMethods);
//   obj.count = 0;
//   return obj;
// };

// var queueMethods = {
//   enqueue: function(input) {
//     this[this.count] = input;
//     this.count++;
//   },
//   dequeue: function() {
//     var keys = Object.keys(this);
//     var numKeys = keys.filter(function(item) {
//       return !(isNaN(parseInt(item)));
//     });
//     var smallest = Math.min(...numKeys);
//     var temp = this[smallest];
//     delete this[smallest];
//     return temp;

//   },
//   size: function() {
//     return Object.keys(this).length - 1;
//   }
// };

// reimplement
// similar to functional-shared, only different in method definition: Object assign (merge obj) vs Object create (prototypal)
var Queue = function() {
  var storage = {};
  storage = Object.create(queueMethods); //prototypal relationship needs to be established before array property defined, else array gets overwritten
  storage.array = [];
  return storage;
};

var queueMethods = {
  size: function(){
    return this.array.length;
  },
  enqueue: function(val){
    this.array.push(val);
  },
  dequeue: function(){
    return this.array.shift();
  }
};
