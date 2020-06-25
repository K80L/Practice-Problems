function reverseArray(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

// console.log(reverseArray([1, 2, 3, 4]));
// console.log(reverseArray([]));
function randomInts(n, m) {
  if (m > n) {
    throw new Error("m is larger than n, cannot print more integers than n");
  }
  if (n <= 0) {
    throw new Error("n must be a positive number greater than 0");
  }
  if (m <= 0) {
    throw new Error("m must be a positive integer greater than 0");
  }

  let seen = {};
  let rand = [];
  while (rand.length !== m) {
    let randomInt = Math.floor(Math.random() * n);
    if (!(randomInt in seen)) {
      rand.push(randomInt);
      seen[randomInt] = true;
    }
  }
  return rand;
}

console.log(randomInts(10, 5));

function randomEle(array, m) {
  if (m > array.length) {
    throw new Error(
      `Cannot select ${m} elements when there are only ${array.length} elements to pick from`
    );
  }

  const rand = [];
  const seen = {};

  while (rand.length !== m) {
    let randomIdx = Math.floor(Math.random() * array.length);
    if (!(randomIdx in seen)) {
      rand.push(array[randomIdx]);
      seen[randomIdx] = true;
    }
  }

  return rand;
}

// console.log(randomEle([1, 2, 3, 4, 5, "a", "b", "c", "d", "e"], 7));

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  createNode(node) {
    if (!this.adjList.get(node)) {
      this.adjList.set(node, []);
    } else {
      throw new Error("Node already exists");
    }
  }

  insertNode(parent, child) {
    // check if there is a path from child to parent
    // if there IS a path from child to parent, CANNOT INSERT b/c it will cause a cycle
    // if there IS NO path  from child to parent, we can insert the child to the parent

    if (!this.pathToParent(parent, child)) {
      this.adjList.get(parent).push(child);
    } else {
      throw new Error(`Cannot insert ${child} as a child to ${parent}`);
    }
  }

  printGraph() {
    let keys = this.adjList.keys();

    for (let k of keys) {
      let values = this.adjList.get(k);
      console.log(`${k} -> ${values.join(", ")}`);
    }
  }

  pathToParent(parent, child, visited = {}) {
    if (parent === child) {
      return true;
    }

    visited[child] = true;

    let neighbors = this.adjList.get(child).slice();

    while (neighbors.length) {
      let neighbor = neighbors.shift();
      if (!visited[neighbor]) {
        return this.pathToParent(parent, neighbor, visited);
        // return true;
      }
    }

    return false;
  }
}

// let g = new Graph();
// g.createNode(1);
// g.createNode(2);
// g.createNode(3);
// g.createNode(6);
// g.createNode(7);
// g.createNode(8);
// g.createNode(9);
// g.createNode(10);

// g.insertNode(1, 2);
// g.insertNode(1, 3);
// g.insertNode(2, 3);
// g.insertNode(2, 6);
// g.insertNode(7, 8);
// g.insertNode(8, 9);
// g.insertNode(8, 10);
// g.insertNode(10, 9);
// g.insertNode(9, 6);
// g.insertNode(6, 8);

// g.insertNode(9, 7); // should break here b/c inserting 9 as a parent of 7 will create a cycle

// g.printGraph();
