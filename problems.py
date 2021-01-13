#QUESTION  1 Two-Sum Number
#GIVEN AN ARRAY AND TARGET SUM FIND TWO NUMBERS THAT SUM UP TO THE TARGET SUM

def targetSum(array, target):
    hash = {}
    for number in array:
        if number not in hash:
            hash[number] = True
        for storedNum in hash:
            if number + storedNum = 
