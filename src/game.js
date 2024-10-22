import React, { useState } from 'react';
import { BinaryTree } from './tree';  // Adjust path as necessary

// Create a binary tree and initialize it with questions
const createGameTree = () => {
  const tree = new BinaryTree();
  tree.createRoot("Is it a Graph?");

  tree.addNode("Is it a Graph?", "Is it a tree?", true);
  tree.addNode("Is it a Graph?", "Do you need to solve for kth smallest/largest element?", false);

  tree.addNode("Do you need to solve for kth smallest/largest element?", "Heaps/Sorting", true);
  tree.addNode("Do you need to solve for kth smallest/largest element?", "Does it involve Linked lists?", false);

  tree.addNode("Is it a tree?", "DFS", true);
  tree.addNode("Is it a tree?", "Is it related to directed acyclic graphs?", false);

  tree.addNode("Is it related to directed acyclic graphs?", "Topological Sort", true);
  tree.addNode("Is it related to directed acyclic graphs?", "Is the problem related to shortest paths?", false);

  tree.addNode("Is the problem related to shortest paths?", "Is the graph weighted?", true);
  tree.addNode("Is the problem related to shortest paths?", "Does the problem relate to connectivity?", false);

  tree.addNode("Is the graph weighted?", "Dijkstra Algorithm", true);
  tree.addNode("Is the graph weighted?", "BFS", false);

  tree.addNode("Does the problem relate to connectivity?", "Disjoint Set Union", true);
  tree.addNode("Does the problem relate to connectivity?", "Does it have small constraints?", false);

  
  tree.addNode("Does it have small constraints?", "DFS/Backtracking", true);
  tree.addNode("Does it have small constraints?", "BFS", false);
 
  tree.addNode("Does it involve Linked lists?", "Two-pointers", true);
  tree.addNode("Does it involve Linked lists?", "Does it have small constraint bounds?", false);

  tree.addNode("Does it have small constraint bounds?", "Is brute-force fast enough?", true);
  tree.addNode("Does it have small constraint bounds?", "Is it about subarrrays or substrings?", false);
  
  tree.addNode("Is brute-force fast enough?", "Brute-force/Backtracking", true);
  tree.addNode("Is brute-force fast enough?", "Dynamic Programming", false);

  tree.addNode("Is it about subarrrays or substrings?", "Does it deal with sums or additive?", true);
  tree.addNode("Is it about subarrrays or substrings?", "Does it calculate min/max of something?", false);

  tree.addNode("Does it deal with sums or additive?", "Prefix-Sum", true);
  tree.addNode("Does it deal with sums or additive?", "Sliding window", false);

  tree.addNode("Does it calculate min/max of something?", "Monotonic Condition?", true);
  tree.addNode("Does it calculate min/max of something?", "Asking for number of ways?", false);

  tree.addNode("Monotonic Condition?", "Binary Search", true);
  tree.addNode("Monotonic Condition?", "Can be split into sub-problems?", false);

  tree.addNode("Can be split into sub-problems?", "Dynamic Programming", true);
  tree.addNode("Can be split into sub-problems?", "Can solution be calculated greedily?", false);

  tree.addNode("Can solution be calculated greedily?", "Greedy", true);

  tree.addNode("Asking for number of ways?", "Is brute-force fast enough?", true);
  tree.addNode("Asking for number of ways?", "Multiple-sequences?", false);

  tree.addNode("Is brute-force fast enough?", "Brute-force/Backtracking", true);
  tree.addNode("Is brute-force fast enough?", "Dynamic Programming", false);

  tree.addNode("Multiple-sequences?", "Does it have any Monotonic Condition?", true);
  tree.addNode("Multiple-sequences?", "Find or enumerate indices?", false);

  tree.addNode("Does it have any Monotonic Condition?", "Yes", true);
  tree.addNode("Does it have any Monotonic Condition?", "Can it be split into sub-problems", false);

  tree.addNode("Can it be split into sub-problems", "Dynamic Programming", true);

  tree.addNode("Find or enumerate indices?", "Has monotonic condition?", true);
  tree.addNode("Find or enumerate indices?", "Is O(1) solution required?", false);

  tree.addNode("Has monotonic condition?", "Two-pointers", true);

  tree.addNode("Is O(1) solution required?", "Does it involve monotonic condition?", true);

  tree.addNode("Does it involve monotonic condition?", "Two-pointers",true);

  return tree;
}

function Game() {
  const [tree] = useState(createGameTree());  // Initialize tree state
  const [currentNode, setCurrentNode] = useState(tree.getRoot());

  const handleAnswer = (answer) => {
    if (!currentNode) return;

    // Navigate to the next node based on user's answer
    if (answer === 'yes' && currentNode.yes) {
      setCurrentNode(currentNode.yes);
    } else if (answer === 'no' && currentNode.no) {
      setCurrentNode(currentNode.no);
    } else {
      alert("No further nodes found for this path.");
      setCurrentNode(tree.getRoot()); // Restart game
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
      <h1>Algorithm Guessing Game</h1>
      {currentNode && <p>{currentNode.questionString}</p>}
      {/* Show the appropriate button(s) based on available paths */}
      {currentNode && (
        <div>
          {currentNode.yes != null && <button onClick={() => handleAnswer('yes')}>Yes</button>}
          {currentNode.no != null && <button onClick={() => handleAnswer('no')}>No</button>}
        </div>
      )}

      {currentNode && currentNode.yes == null && currentNode.no == null && (
        <div>
          <p>Algorithm you should use: <strong>{currentNode.questionString}</strong></p>
          <button onClick={() => setCurrentNode(tree.getRoot())}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
