// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2){
    return number1
  } else {
    return number2
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longestWord = '';
  if (words.length === 1 || typeof words === "string") {
    return words[0] 
  } else if (words.length > 1) {
    for (let i=0; i < words.length; i++){
      let individualWord = words[i]
      if(individualWord.length > longestWord.length) {
        longestWord = individualWord
      }  
    }
    return longestWord
  } else if (words.length === 0 || typeof words !== "object" ) {
    return null
  } 
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let theTotal = 0;
  let result =0;
  if (numbers.length === 1) {
    return numbers[0] 
  } else if (numbers.length === 0 || numbers === []) {
    return 0
  } else if (numbers.length === 2) {
    let result= numbers[0]+numbers[1]
    return result
  } else if (numbers.length > 2 || typeof numbers !== "number"){
    for (let i = 0; i < numbers.length; i++){
      theTotal += numbers[i];
    }
    return theTotal;
  }
}

// Iteration #3.1 Bonus:
const numbers2 = [10, 5, 4, 32, 8] //59

function sum(numbers2) {
  let theTotal = 0;
  if (numbers2.length === 0) {
    theTotal = 0
    return theTotal
  } else if (numbers2.length === 1) {
    theTotal = numbers2[0]
    return theTotal 
  } else if (numbers2.length > 0){
    for (let i=0; i < numbers2.length; i++){
        if (numbers2[i].length === 0 || typeof numbers2[i] === 'object') {
          throw theTotal = `Unsupported data type sir or ma'am`;
        } else if (typeof numbers2[i] === 'number') {
          theTotal += numbers2[i]
        } else if (typeof numbers2[i] === 'string'){
          theTotal += numbers2[i].length
        } else if (typeof numbers2[i] === 'boolean' &&  numbers2[i] === true){
          theTotal += 1
        } else if (typeof numbers2[i] === 'boolean' &&  numbers2[i] === false){
          theTotal += 0
        }  
    }
    return theTotal
  } 
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let theSumAverage = 0;
  if (numbersAvg.length === 0) {
    return null
  } else if (numbersAvg.length === 1) {
    return numbersAvg[0] 
  } else if (numbersAvg.length > 1) {
    for (let i=0; i< numbersAvg.length; i++){
      theSumAverage += numbersAvg[i]
    }
    return theSumAverage/numbersAvg.length
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let averageWordsArr = 0;
  if (wordsArr.length === 0) {
    return null
  } else if (wordsArr.length === 1) {
    return wordsArr[0].length
  } else if (wordsArr.length > 1){
    for (let i=0; i < wordsArr.length; i++){
      averageWordsArr += wordsArr[i].length
    }
    return averageWordsArr/wordsArr.length
  }
}

// Bonus - Iteration #4.1
const mixArr = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false]; //5,11

function avg(mixArr) {
  let theAverageWordsArr = 0;
  if (mixArr.length === 0) {
    return null
  } else if (mixArr.length > 1){
    for (let i=0; i < mixArr.length; i++){
      if (typeof mixArr[i] === 'number') {
        theAverageWordsArr += mixArr[i]
      } else if (typeof mixArr[i] === 'string'){
        theAverageWordsArr += mixArr[i].length
      } else if (typeof mixArr[i] === 'boolean' &&  mixArr[i] === true){
        theAverageWordsArr += 1
      } else if (typeof mixArr[i] === 'boolean' &&  mixArr[i] === false){
        theAverageWordsArr += 0
      }
    }
    return Math.round((theAverageWordsArr/mixArr.length)*100) /100 //rerdondear a dos decimales y no al numero entero
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique){
  let theWordsUnique = [...new Set(wordsUnique)]
  if (wordsUnique.length === 0|| typeof wordsUnique !== "object") {
    return null
  } else {
    return  theWordsUnique 
  }
}

// function uniquifyArray(wordsUnique) {
//   wordsUnique.sort() 
//   let newWordsUnique = [];
//     if (wordsUnique.length === 0|| typeof wordsUnique !== "object") {
//       return null
//     } else {
//       for(let i=0; i < wordsUnique.length; i++){
//         let newWordsUnique = ['hola']
//         if (wordsUnique[i] === wordsUnique[i + 1]) {
//           wordsUnique.splice(i,1)
//         }
//       }
//       return wordsUnique
//     } 
//   }  

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
let theWord = 'subset';

function doesWordExist(wordsFind, theWord) {
  let theAnswer = false
  if (theWord === '' || wordsFind.length === 0) {
      return null
  } else {
    for (let i=0; i < wordsFind.length; i++) {
          if (theWord === wordsFind[i]) {
            theAnswer = true
          } 
    }  
    return theAnswer 
  }
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
let theWord2 = 'subset';

function howManyTimes(wordsCount, theWord2) {
  let theAnswer = false
  let theCounter = 0
  if (theWord === '' || wordsCount.length === 0) {
      return theCounter
  } else {
    for (let i=0; i < wordsCount.length; i++) {
          if (theWord2 === wordsCount[i]) {
            theAnswer = true
            theCounter += 1 
          } 
    }  
    return theCounter 
  }
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
