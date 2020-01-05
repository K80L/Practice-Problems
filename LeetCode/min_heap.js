// Implement a min heap
// methods: peek(), poll(), add(item), heapifyUp(), heapifyDown()

class minHeap {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.items = new Array(capacity);
  }

  getLeftChildIndex = index => 2 * index + 1;
  getRightChildIndex = index => 2 * index + 2;
  getParentIndex = childIndex => Math.floor((childIndex - 1) / 2);

  _hasLeftChild = index => this.getLeftChildIndex(index) < this.size;
  _hasRightChild = index => this.getRightChildIndex(index) < this.size;
  _hasParent = childIndex => this.getParentIndex(childIndex) >= this.size;

  _leftChild = index => this.items[this.getLeftChildIndex(index)];
  _rightChild = index => this.items[this.getRightChildIndex(index)];
  _parent = childIndex => this.items[this.getParentIndex[childIndex]];

  swap = (index1, index2) => {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1]
    ];
  };

  peek = () => {
    if (size === 0) throw RangeError;
    return this.items[0];
  };

  pull = () => {
    if (size === 0) throw Error("Heap is empty. Nothing to pull.");
    let item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    heapifyDown();
    return item;
  };

  add = item => {
    this.items[this.size] = item;
    this.size++;
    heapifyUp();
  };

  heapifyUp = () => {
    let index = size - 1;
    while (this._hasParent(index) && this.items[index] < this._parent(index)) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  };

  heapifyDown = () => {
    let index = 0;
    while (
      this._hasLeftChild(index) &&
      this.items[index] > this._leftChild(index)
    ) {
      let smallerIndex = this.getLeftChildIndex(index);
      if (this._hasRightChild(index)) {
        smallerIndex =
          this._leftChild(index) < this._rightChild(index)
            ? this.getLeftChildIndex(index)
            : this.getRightChildIndex(index);
      }
      if (this.items[index] < this.items[smallerIndex]) {
        break;
      } else {
        swap(index, smallerIndex);
      }
      index = smallerIndex;
    }
  };
}
