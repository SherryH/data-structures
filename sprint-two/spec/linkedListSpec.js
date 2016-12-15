describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('STUDENT TEST: should return false when calling contains on an empty list', function() {
    expect(linkedList.contains(1)).to.equal(false);
  });

  it('STUDENT TEST: should have the same head and tail if only one value in the list', function() {
    linkedList.addToTail(8);
    expect(linkedList.head).to.equal(linkedList.tail);
  });

  it('STUDENT TEST: should return true when calling contains after calling removeHead given the value of head is identical to another node in the list', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeHead();
    expect(linkedList.contains(1)).to.equal(true);
  });

  it('STUDENT TEST: should have a next value of null when the current node is tail', function() {
    linkedList.addToTail(8);
    expect(linkedList.tail.next).to.equal(null);
  });

});
