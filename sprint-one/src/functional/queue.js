var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;


  someInstance.enqueue = function(value) {
    storage[count+1] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var smallest = Math.min(...keys);
    var temp = storage[smallest];
    console.log(storage);
    delete storage[smallest];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
