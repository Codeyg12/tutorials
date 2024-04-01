//* Reverese a String
// function reverse(str) {
//! First One
// let reversed = '';
// for (let char of str) {
//     reversed = char + reversed
// }
// return reversed

//? Second One
// return str.split('').reverse().join('')
// }
// console.log(reverse('Hello'))

//* Palindrome
// function palindrome(word) {
//     let newStr = word.split('').reverse().join('')

//     if (newStr == word) return true

//     return false
// }

// console.log(palindrome('kayak'));

//* Most Appearing Character
// function maxChar(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let char;
//   for (let char of str) {
//     charMap[char] = ++charMap[char] || 1;
//   }

//   for (const key in charMap) {
//     if (charMap[key] > maxNum) {
//       maxNum = charMap[key];
//       char = key;
//     }
//   }

//   return char;
// }

// console.log(maxChar("alongtimeagoinagalaxy"));

//* Array Chunking
// function chunk(arr, size) {
//   let result = [];
//   let index = 0;
//   while (index < arr.length) {
//     result.push(arr.slice(index, index + size));
//     index += size;
//   }
//   return result;
// }

// console.log(chunk([1, 2, 3, 4, 5, 6], 2));

//* Capitalize the First Letter
// function capitalize(str) {
//! First One
//   let sentence = str.split(" ");
//   let result = [];
//   for (let char of sentence) {
//     result.push(char.charAt(0).toUpperCase() + char.slice(1));
//   }
//   return result.join(" ");

//? Second One
//   let sentence = str.split(" ");
//   return sentence
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalize("hey whats up"));

//* Anagram
//! First One
// function charMap(str) {
//   const charMap = {};
//   str = str.toLowerCase().replace(/[\W]/g, "");
//   for (let char of str) {
//     charMap[char] = ++charMap[char] || 1;
//   }
//   return charMap;
// }

// function anagrams(strA, strB) {
//   const charMapA = charMap(strA);
//   const charMapB = charMap(strB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//     return false;

//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) return false;
//   }

//   return true;
// }
// console.log(anagrams("rail safety", "fairy tales"));
//? Seccond One
// function cleanStr(str) {
//   return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
// }
// function anagram(strA, strB) {
//   return cleanStr(strA) === cleanStr(strB);
// }

// console.log(anagram("rail safety", "fairy tales"));

//* Number of Vowels
// function vowels(str) {
//! First One
// const matches = str.match(/[aeiou]/gi)
// return matches ? matches.length : 0
//   let vowelCheck = ["a", "e", "i", "o", "u"];

//   let count = 0;

//   for (let char of str) {
//     if (vowelCheck.includes(char)) count++;
//   }

//   return count;
// }

// console.log(vowels("hello"));

//* FizzBuzz
// function fizzBuzz(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(fizzBuzz(17));

//* Level Steps
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let line = "";
//     for (let col = 1; col <= n; col++) {
//       if (col <= row) {
//         line += "#";
//       }
//     }
//     console.log(line);
//   }
// }

// steps(3);

//* Pyramid
// function pyramid(n) {
//   const mid = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let line = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (col >= mid - row && col <= mid + row) {
//         line += "#";
//       } else {
//         line += " ";
//       }
//     }
//     console.log(line);
//   }
// }

// pyramid(3);

//* Spiral Matrix
// function matrix(n) {
//   const result = [];
//   let counter = 1,
//     startRow = 0,
//     endRow = n - 1,
//     startCol = 0,
//     endCol = n - 1;
//   for (let i = 0; i < n; i++) {
//     result.push([]);
//   }

//   while (startRow <= endRow && startCol <= endCol) {
//     //Top
//     for (let i = startCol; i <= endCol; i++) {
//       result[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     //Right
//     for (let i = startRow; i <= endRow; i++) {
//       result[i][endCol] = counter;
//       counter++;
//     }
//     endCol--;

//     //Bottom
//     for (let i = endCol; i >= startCol; i--) {
//       result[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     //Left
//     for (let i = endRow; i >= startRow; i--) {
//       result[i][startCol] = counter;
//       counter++;
//     }
//     startCol++;
//   }

//   return result;
// }

// console.log(matrix(4));
