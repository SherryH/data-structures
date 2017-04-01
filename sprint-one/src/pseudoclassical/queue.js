// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   this.count = 0;
// };

// Queue.prototype.enqueue = function(input) {
//   this[this.count] = input;
//   this.count++;
// };
// Queue.prototype.dequeue = function() {
//   var keys = Object.keys(this);
//   var numKeys = keys.filter(function(item) {
//     return !isNaN(parseInt(item));
//   });
//   var smallest = Math.min(...numKeys);
//   var temp = this[smallest];
//   delete this[smallest];
//   return temp;
// };
// Queue.prototype.size = function() {
//   return Object.keys(this).length - 1;
// };



//reimplement
var Queue = function() {
  this.array = [];
};

Queue.prototype.size = function() {
  return this.array.length;
}

Queue.prototype.enqueue = function(val) {
  this.array.push(val);
}

Queue.prototype.dequeue = function() {
  return this.array.shift();
}

//reimplment with ES6
// class Queue {
//   constructor(){
//     this.array = [];
//   }

//   size(){
//     return this.array.length;
//   }

//   enqueue(val){
//     this.array.push(val);
//   }

//   dequeue(){
//     return this.array.shift();
//   }
// }