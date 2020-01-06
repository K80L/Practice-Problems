//Priority Queue is an extension of a regular Queue
//Each element in the PQ has an associated priority(rank)
//Lowest priority elements are removed first

//enqueue(element, priority) - adds an element to the PQ at the correct spot
//dequeue() - remove the lowest priority element
//front() - peek at the lowest priority element
//isEmpty() - checks if PQ is empty
//printPQ() - print all elements of the PQ

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = []; //array used to implement priority
  }

  enqueue = (element, priority) => {
    qEl = new QElement(element, priority);
    let contain = false;

    //[1,2,3,5] enqueue(4, 4)
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qEl.priority) {
        this.items.splice(i, 0, qEl);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(qEl);
    }
  };

  dequeue = () => {
    if (this.items.isEmpty()) {
      return "Underflow";
    }

    return this.items.shift();
  };

  front = () => {
    if (this.items.isEmpty()) {
      return "Nothing in Priority Queue";
    }
    return this.items[0];
  };

  rear = () => {
    if (this.items.isEmpty()) {
      return "Nothing in Priority Queue";
    }
    return this.items[this.items.length - 1];
  };

  isEmpty() {
    return this.items.length == 0;
  }
}
