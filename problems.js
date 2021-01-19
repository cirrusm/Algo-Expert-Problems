// QUESTION  1 Two-Sum Number
//GIVEN AN ARRAY AND TAGET SUM FIND TWO NUMBERS THAT SUM UP TO THE TARGET SUM

//create hash table
//For every number in array, check if its complement is in the hashtable, if not add the number to the hashtable
//Keep going until you find a complement or run out of numbers in the array

function twoSum(array, target) {
  let hashTable = {};
  for (let number of array) {
    if (target - number in hashTable) {
      return [number, target - number];
    } else {
      hashTable[number] = true;
    }
  }
  return [];
}

//QUESTION 2 VALIDATING A SUBSEQUENCE
//GIVEN AN ARRAY AND A SUBSEQUENCE CHECK IF THE SUBSEQUENCE OCCURS IN THE ARRAY
//Initialize a counter that acts as a pointer for the given sequence
//Loop through array, incrementing the counter each time you hit an index that is equal to the index of the sequence at the counter

function subSequence(array, sequence) {
  let counter = 0;
  for (let item of array) {
    if (item == sequence[counter]) {
      counter += 1;
    }
  }
  return counter == sequence.length;
}

//QUESTION 3 FIND CLOSEST VALUE IN BST
//Initialize current node to be the root node
// Initialize closest to be value of root node
//Check if the node you are on is closer to the current closest value you have stored
//Update it if current node is closer than old closest
//If node your on is greater than target go right, else go left
//Once you hit a null node, return what you have stored as the closest node

function closest(tree, number) {
  let currentNode = tree;
  let closest = tree.value;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

//QUESTION 4 BRANCH SUMS
// RETURN LIST OF BRANCH SUMS GIVEN A BINARY TREEE
//WRITE RECURSIVE FUNCTION TO GO DOWN EACH BRANCH
//Keep running it on left and right node as long as each exist. 
// If they dont exist, push that sum to the array and return

function branchSums(root) {
  sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (!node) return;
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

//QUESTION 5 NODE DEPTHS
//FIND THE SUM OF THE DEPTHS OF ALL NODES (EACH POINT)

function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node == null) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}

//RECURSIVE SOLUTION FOR QUESTION 5

function nodeDepths2(root, depth = 0) {
  if (root == null) return 0;
  return (
    depth +
    nodeDepths2(root.left, depth + 1) +
    nodeDepths(root.right, depth + 1)
  );
}

//QUESTION 6 DEPTH FIRST SEARCH
//IMPLEMENT THE DEPTH FIRST SEARCH METHOD GIVEN A TREE

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

//QUESTION 7
//NTH FIBONACCI

function getNthFib(n) {
  let fibs = [0, 1];
  if (n < 0) return null;
  if (n <= 2) return fibs[n - 1];
  for (let i = 2; i < n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }
  return fibs[n - 1];
}
