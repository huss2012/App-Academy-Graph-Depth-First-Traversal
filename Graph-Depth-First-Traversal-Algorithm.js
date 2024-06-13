const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printDepthFirst(start) {
  // your code here
/*
1. Create a stack and push the starting node.
2. Create a set to store visited nodes, and add the starting node.
3. While the stack is not empty, repeat steps 4-6.
4. Pop the node on the top of the stack.
5. DO THE THINKG THAT YOU NEED TO DO FOR THE POPPED NODE.
    1. For example, add it to a running total, print it, or save it in an array.
6. For each unvisited neighbor, add it to the visited nodes and to the top of the stack.
*/
    let stack = [];
    stack.push(start);
    let visitedNodeSet = new Set();
    visitedNodeSet.add(stack[0]);
    while (stack.length > 0) {
        let currentNode = stack.pop();
        console.log(currentNode);
        for (let i = 0; i < adjList[currentNode].length; i++) {
            let neighbor = adjList[currentNode][i];
            if (!visitedNodeSet.has(neighbor)) {
                visitedNodeSet.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
}

//--------Local Test Area-------------------------
console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 1, 3
