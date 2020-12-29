//CODEWARS QUESTIONS

//CONVERT STRING TO CAMEL CASE

function toCamelCase(str) {
  if (str.length == 0) return "";
  let convertedLetters = [];
  convertedLetters.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == "-" || str[i - 1] == "_") {
      convertedLetters.push(str[i].toUpperCase());
    } else if (str[i] == "-" || str[i] == "_") {
      continue;
    } else convertedLetters.push(str[i]);
    //   }
  }

  return convertedLetters.join("");
}

//GIVEN TWO OBJECTS, AN INGREDIENT LIST AND A RECIPE LIST, SEE HOW MANY CAKES YOU CAN MAKE BASED ON THE INGREDIENTTS THAT YOU AHVE
// EXAMPLE recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// available = {sugar: 500, flour: 2000, milk: 2000};
function cakes(recipe, available) {
  let leastIngredient = null;
  for (let ingredient in recipe) {
    let cakesWithIngredient = Math.floor(
      available[ingredient] / recipe[ingredient]
    );
    if (available[ingredient] == null || cakesWithIngredient == 0) {
      return 0;
    } else if (
      leastIngredient == null ||
      leastIngredient > cakesWithIngredient
    ) {
      leastIngredient = cakesWithIngredient;
    }
  }
  return leastIngredient;
}

//GIVEN ARRAY OF 10 NUMBERS TURN IT INTO A PHONE NUMBER

function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")", " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}

//GIVEN A STRING, RETURN IT IN WIERDCASE

function toWeirdCase(string){
  let wierdCase = []
  let upper = true
  for(let i = 0; i < string.length; i++){
    if(string[i] == ' ' || !upper){
      wierdCase.push(string[i])
      upper = true
    }else{
    wierdCase.push(string[i].toUpperCase())
      upper = false
    }
  }
  return wierdCase.join('')
  }

  //IS MY FRIEND CHEATING QUESTION
  // A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
  // Within that sequence, he chooses two numbers, a and b.
  // He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
  // Given a number n, could you tell me the numbers he excluded from the sequence?
  // The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

  function removeNb (n) {
    let sequenceSum = 0
    let table = {}
    let complement
    let answer = []
    for(let i = 0; i <= n; i++){
      sequenceSum += i
      table[i] = true
    }
  
    for(let i = 0; i <= n; i++){
      complement = (sequenceSum - i)/(i+1)
      if(table[complement] == true){
        answer.push([i, complement])
      }
    }    
  return answer
    }


  //WRITE A FUNCTION THAT TAKES IN A STRING AND RETURNS AN ARRAY OF THE STRING SPLIT INTO PAIRS

  function solution(str){
    let answer = []
    let counter = 0
    for(let i =0; i < str.length; i+=2){
      if(i == str.length - 1){
        answer.push(`${str[i]}_`)
      }else{
   answer.push(`${str[i]}${str[i+1]}`)
      }
      }
   return answer
 }