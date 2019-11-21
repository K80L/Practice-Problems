// Route Between Nodes
function routeBtwnNodes(graph, source, target) {
  return defaultStatus(graph, new Set(), source, target) 
}

function dfs(graph, dictionary, source, target) {
  if (source === target) return true

  dictionary.add(source);

  for (let neighbor of graph[source]) { //graph[source] ==> gives me all the connected nodes? as an array, then iterate through it with for/of loop
    if (!dictionary.has(neighbor)) {
      if (dfs(graph, dictionary, neighbor, target)) {
        return true;
      }
    }
  }

  return false;
}

function minTree(sortedArr, start, end) {
  let midIdx = Math.floor(sortedArr.length/2);
  let mid = sortedArr[midIdx];

  let n = new Node(mid);

  n.left = minTree(sortedArr.slice(0, midIdx));
  n.right = minTree(sortedArr.slice(midIdx+1, sortedArr.length-1))

  return n;
}

function listOfDepths(tree) {
  let list = [];
  addToList(list, tree.root, 0);
  return list;
}

function addToList(list, node, depth) {
  if (node) {
    if (!list[depth]) {
      list[depth] = new linkedList();
    }
  }

  list[depth].append(node.value);
  addToList(list, node.left, depth+1)
  addToList(list, node.right, depth+1)
}

