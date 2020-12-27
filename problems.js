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