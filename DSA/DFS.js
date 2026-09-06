function dfs(graph, root){
  const stack = [root]
  const visited = new Set()

  const result = []

  while(stack.length > 0){
    const currentNode = stack.pop();

    if(!visited.has(currentNode)){
      visited.add(currentNode);
      result.push(currentNode);

      for(let i = graph[currentNode].length - 1 ; i >= 0; i--){
        if(graph[currentNode][i] === 1 && !visited.has(i)){
          stack.push(i)
        }
      }
    }
  }
  return result
}


