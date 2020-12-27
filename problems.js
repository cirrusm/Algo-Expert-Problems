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

