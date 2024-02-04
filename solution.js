// 1. Sum Squares

const sumSquares = (num) => {
    let sum = 0
    
    for (let i = 1; i <= num; i++) {
        sum += i * i
    }
    return sum
}

// Test

let startNum = 3;

console.log("Result 1:", sumSquares(startNum)); // Expected output is 14




// 2. Invert Values 

const invertValues = (numArr) => {
     // Your solution here 
    const invertedArray = numArr.map((num) => -num)
    return invertedArray
}

// Test

const numArr2 = [1, 3, 4, 5];
console.log("Result 2:", invertValues(numArr2));  // Expected output is [-1, -3, -4, -5]




// 3. Reversed Strings

const reverseString = (str) => {
   // Your solution here 
   let reversed = ''

   for (let i = str.length - 1; i >= 0; i--) {
     reversed += str[i]
   }
 
   return reversed
}

// Test

let stringToReverse = "Wario";
console.log("Result 3:", reverseString(stringToReverse));   // Expected output is "oiraW"




// 4. Find Smallest Integer Not Present in Original Array (non-inclusive of zero)

const findSmallestInt = (numArr) => {
    // Your solution here 
    const positiveIntegers = numArr.filter(num => num > 0);

    positiveIntegers.sort((a, b) => a - b)
    let smallestMissingInt = 1
    for (const num of positiveIntegers) {
        if (num === smallestMissingInt) {
            smallestMissingInt++
        } else {
            break
        }
    }

  return smallestMissingInt
}

// Test

const numArr3 = [1, 3, 4, 5]
console.log("Result 4:", findSmallestInt(numArr3));  // Expected output is 2




// 5. Counting Sheep

const countingSheep = (boolArr) => {
    // Your solution here 
    const count = boolArr.filter(value => value === true).length
    return count
    //let count = 0
    //boolArr.forEach(sheep => {
        //if (sheep === true){
            //count++
        //}
    //})
    //return count
}

// Test

const sheepArr = [true, false, false, true, true];
console.log("Result 5:", countingSheep(sheepArr));  // Expected output is 3 




// 6. Calculate Average

const calculateAverage = (numArr) => {
    // Your solution here 
    let sum = 0
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i]
    }

    const average = sum / numArr.length
    return average
}

// Test

const numArr4 = [20, 10, 60]
console.log("Result 6:", calculateAverage(numArr4))  // Expected output is 30 




// 7. isPalindrome

const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-z]/g, '')

    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false
        }
    }
  return true
}

// Test

const testStr = "kayak"
console.log("Result 7:", isPalindrome(testStr));  // Expected output is true 




// 8. Find the middle element

const findMiddleElement = (numArr) => {
    const length = numArr.length
    const middleIndex = Math.floor(length / 2)

    if (length % 2 === 1) {
        return numArr[middleIndex]
    } else {
        const middleValuesSum = numArr[middleIndex - 1] + numArr[middleIndex]
        return middleValuesSum / 2
    }
}

// Test

const arrayForMiddle = [10, 2, 33, 74, 5];
console.log("Result 8:", findMiddleElement(arrayForMiddle));  // Expected output is 33




// 9. Training on vowel count

const countVowels = (str) => {
    // const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    // let vowelCount = 0

    // str.split('').forEach(char => {
    //     if (vowels.includes(char)) {
    //       vowelCount++
    //     }
    // })

    // return vowelCount
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(str[i])) {
            count++;
        }
    }
    return count
}

// Test

const testStr2 = "Casiopia"
console.log("Result 9:", countVowels(testStr2));  // Expected output is 5




// 10. Recursive Sum of an Array

const recursiveSum = (numArr) => {
    // Your solution code 
}

// Test

const numbers = [1, 2, 3, 4, 5];
console.log("Result 10", recursiveSum(numbers));




// 11. Find the index of the numerically middle number 

const findMiddleIndex = (numArr) => {
    // Your solution code 
}

// Test

const outOfOrderArr = [4, 8, 1, 2, 3];
console.log("Result 11", findMiddleIndex(outOfOrderArr)); // Expected output is 1




// 12. Are Anagrams 

const areAnagrams = (str1, str2) => {
    // Your solution here 
}

// Test

console.log("Result 12:", areAnagrams('listen', 'silent'));  // Expected output is true 




// 13. Sum Diagonals 

const sumDiagonals = (twoDArray) => {

}

// Test

const testTwoDArray = [[1, 3, 2], 
                       [3, 6, 4]
                       [7, 1, 9]]

console.log("Result 13:", sumDiagonals(testTwoDArray));  //Expected output is 31 
