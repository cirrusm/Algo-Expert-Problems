//CODEWARS QUESTIONS

//CONVERT STRING TO CAMEL CASE

function toCamelCase(str){
  if (str.length == 0) return ''
  let convertedLetters = []
  convertedLetters.push(str[0])
  for(let i = 1; i < str.length; i++){
    if(str[i-1] == '-' || str[i-1] == '_'){
      convertedLetters.push(str[i].toUpperCase())
    }else if(str[i] == '-' || str[i] == '_'){
      continue
    }else convertedLetters.push(str[i])
//   }
}
    
  return convertedLetters.join('')
  
  }