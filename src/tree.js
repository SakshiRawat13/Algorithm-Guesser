class Node {
    constructor(questionString, no = null, yes = null) {
      this.questionString = questionString;
      this.no = no;
      this.yes = yes;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null; // Initialize the root of the tree
    }
  
    createRoot(question) {
      const currRoot = new Node(question); // Create the root node
      this.root = currRoot;                 // Set as root
      return this.root;                     // Return the root
    }
  
    getRoot() {
      return this.root;                     // Return the root node
    }
  
    addNode(parentQuestion, currentQuestion, isYesBranch) {
      const parentNode = this.getNode(this.root, parentQuestion); // Find parent node
      const currentNode = new Node(currentQuestion);              // Create new node
  
      if (isYesBranch) {
        parentNode.yes = currentNode;                              // Link to Yes branch
      } else {
        parentNode.no = currentNode;                               // Link to No branch
      }
    }
  
    getNode(node, questionText) {
      if (node == null) return null;                              // Base case
  
      if (node.questionString === questionText) {
        return node;                                              // Return the matching node
      }
  
      // Recursively search left and right
      const leftResult = this.getNode(node.no, questionText);    // Check No branch
      if (leftResult) return leftResult;
  
      return this.getNode(node.yes, questionText);              // Check Yes branch
    }
  }
  
  // Export the Node and BinaryTree classes
  export { Node, BinaryTree };
  