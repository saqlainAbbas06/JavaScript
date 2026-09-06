function adjacencyListToMatrix(obj){
  const n = Object.keys(obj).length;
  const values = Object.values(obj);
  let adjMatrix = [];
  
  for(let i = 0; i < values.length; i++){
    adjMatrix.push(Array(n).fill(0));
    
    for(const node of values[i]){
      adjMatrix[i][node] = 1;     
    }
  }
  
  for(let i = 0; i < adjMatrix.length; i++){
    console.log(adjMatrix[i]);
  }
  
  return adjMatrix;
}
