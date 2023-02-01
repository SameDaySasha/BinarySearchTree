// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    if (!this.root){
      this.root = new TreeNode(val)
    } else if (val < currentNode.val){
      if (!currentNode.left){
        currentNode.left = new TreeNode(val)
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if(!currentNode.right){
       currentNode.right = new TreeNode(val)
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }

  search(val, currentNode = this.root) {
    if (!currentNode) {
      return false;
    } else if (currentNode.val === val) {
      return true;
    // } else if (this.search(currentNode.left, val)){
    //  return true;
    // } else
    // return this.search(currentNode.right, val)
    }else if (val < currentNode.val){
      return this.search(val, currentNode.left)
    } else {
      return this.search(val, currentNode.right)
    }
  }



  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
