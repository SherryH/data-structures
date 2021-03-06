var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count + 1] = value;
    count++;
  };

  someInstance.pop = function() {
    var temp = storage[count];
    delete storage[count];
    count--;
    if (count<0){
      count = 0;
    }
    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

//FILO, using array as internal storage
// push, pop, size
// var Stack = function() {
//   storage = [];
//   // storage array has its own push and pop methods
//   storage.size = function() {
//     var itemNum = 0;
//     if(storage) {
//       itemNum = storage.length;
//     }
//     return itemNum;
//   }
//   return storage;
// };