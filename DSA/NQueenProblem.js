function dfsNQueens(n) {
    if (n < 1) return [];
    
    const res = [];
   
    const state = []; 
    
    const cols = new Set();
    const posDiag = new Set();
    const negDiag = new Set();
    
    function backtrack(r) {
        if (r === n) {

            res.push([...state]);
            return;
        }
        
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }
            

            cols.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            state.push(c);
            
            
            backtrack(r + 1);
            
            cols.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            state.pop();
        }
    }
    
    backtrack(0);
    return res;
}