function route(graph, s, e, visited = {}) {
  if (s === e) {
    return true;
  }

  visited[s] = true;

  let next = s.children;

  for (let i = 0; i < next.length; i++) {
    let child = next[i];
    if (!visited[child]) {
      if (route(graph, child, e, visited)) {
        return true;
      }
    }
  }
  return false;
}
