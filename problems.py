#QUESTION  1 Two-Sum Number
#GIVEN AN ARRAY AND TARGET SUM FIND TWO NUMBERS THAT SUM UP TO THE TARGET SUM

def targetSum(array, target):
    hash = {}
    for number in array:
        if target - number in hash:
            return [number, target - number]
        else:
            hash[number] = True
    return "nah"

#QUESTION 2 VALIDATING A SUBSEQUENCE
#GIVEN AN ARRAY AND A SUBSEQUENCE CHECK IF THE SUBSEQUENCE OCCURS IN THE ARRay

def subsequence(array, sub):
    counter = 0
    for i in range(len(array)):
        if array[i] == sub[counter]:
            counter += 1
        if counter = len(sub):
            return True
        return False

## FIND CLOSEST VALUE IN A BST

def closest(tree, number):
    currentNode = tree
    closest = tree.value
    