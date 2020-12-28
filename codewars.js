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