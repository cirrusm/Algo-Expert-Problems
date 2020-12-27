// QUESTION  1 Two-Sum Number
//GIVEN AN ARRAY AND TAGET SUM FIND TWO NUMBERS THAT SUM UP TO THE TARGET SUM

function twoSum(array, target){
  let hashTable = {}
  for(let number of array){
    if((target - number) in hashTable){
      return [number, target - number]
    }else{
      hashTable[number] = true
    }
  }
  return []
}

//QUESTION 2 VALIDATING A SUBSEQUENCE
//GIVEN AN ARRAY AND A SUBSEQUENCE CHECK IF THE SUBSEQUENCE OCCURS IN THE ARRAY

function subSequence(array, sequence){
  let counter = 0
  for(let item of array){
    if(item == sequence[counter]){
      counter += 1
    }
  }
  return counter == sequence.length
}

//QUESTION 3 FIND CLOSEST VALUE IN BST

function closest(tree, number){
  let currentNode = tree
  let closest = tree.value
  while(currentNode !== null){
    if(Math.abs(target- closest) > Math.abs(target - currentNode.value)){
      closest = currentNode.value
    }
    if(target < currentNode.value){
      currentNode = currentNode.left
    }else if (target > currentNode.value){
      currentNode = currentNode.right
    }else{
      break
    }
  }
  return closest
}

//QUESTION 4 BRANCH SUMS
// RETURN LIST OF BRANCH SUMS GIVEN A BINARY TREE

function branchSums(root){
  sums = []
  calculateBranchSums(root, 0, sums)
  return sums
}

function calculateBranchSums(node, runningSum, sums){
  if(!node) return
  const newRunningSum = runningSum + node.value
  if(!node.left && !node.right){
    sums.push(newRunningSum)
    return
  }
  calculateBranchSums(node.left, newRunningSum, sums)
  calculateBranchSums(node.right, newRunningSum, sums)
}