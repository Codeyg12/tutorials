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

// function palindrome(word) {
//     let newStr = word.split('').reverse().join('')

//     if (newStr == word) return true

//     return false
// }

// console.log(palindrome('kayak'));

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
