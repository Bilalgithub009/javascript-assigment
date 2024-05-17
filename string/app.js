// // q1
// function calculateStringLength(string) {
//     return string.length;
// }

// // Example usage:
// let inputString = prompt("Enter a string:"); // Prompts the user to enter a string
// let length = calculateStringLength(inputString); // Calculates the length of the string
// console.log("Length of the string is:", length); // Outputs the length to the console

// q2

// var original = "hello world"
// var uppercasestring = original.toUpperCase()
// console.log(uppercasestring)

// // q3
// var original = "HELLO WORLD"
// var toLowerCasestring = original.toLowerCase()
// console.log(toLowerCasestring)

// q4
// function countOccurrences(string, char) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// var inputString = "hello world"
// var chartocount = "1"
// var occurances =   countOccurrences(inputString , chartocount)
// console.log( `The character "${chartocount}" occurs ${occurances} times in the string.`)

// q5

// function extractSubstring(inputString, startIndex, endIndex) {
//     if (startIndex < 0 || endIndex > inputString.length || startIndex >= endIndex) {
//         return "Invalid indices or substring range";
//     }
//     return inputString.substring(startIndex, endIndex);
// }

// // Example usage:
// let inputString = prompt("Enter a string:");
// let startIndex = parseInt(prompt("Enter the start index:"));
// let endIndex = parseInt(prompt("Enter the end index:"));

// let substring = extractSubstring(inputString, startIndex, endIndex);
// console.log("Extracted Substring:", substring);

// q6

// var firstletter = 'helloworld'
// var letter = firstletter[0].toUpperCase() + firstletter.slice1(1)
// console.log(firstletter[0].toUpperCase() + firstletter.slice(1));

// // q7
// function removewhitespace  (String) {
//     return String.trim();
// }

// var inputString = "  hello world  "
// var trimedstring = removewhitespace(inputString);
// console.log(inputString.length)
// console.log(trimedstring.length)

// // q8

// var sentence = "Javascript is Wonderful Programing Language";

// var vowelCount = 0;
// var constCount = 0;

// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i].toLowerCase() === "a" || sentence[i].toLowerCase() === "e" || sentence[i].toLowerCase() === "i" || sentence[i].toLowerCase() === "o" || sentence[i].toLowerCase() === "u") {
//     vowelCount++;
//   } else if (sentence[i] != " ") {
//     constCount++;
//   }
// }

// var vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < sentence.length; i++) {
//   var vowelFound = false;

//   for (var j = 0; j < vowels.length; j++) {
//     if (sentence[i].toLowerCase() === vowels[j]) {
//       vowelFound = true;
//       break;
//     }
//   }
//   if (vowelFound) vowelCount++;
//   if (!vowelFound && sentence[i] !== " ") constCount++;
// }

// console.log("vowelCount-> ", vowelCount);

// console.log("constCount-> ", constCount);

// q9

// function extractSubstringFromIndex(inputString, startIndex) {
//     if (startIndex < 0 || startIndex >= inputString.length) {
//         return "Invalid start index";
//     }
//     return inputString.substring(startIndex);
// }

// // Example usage:
// let inputString = "Hello, World!";
// let startIndex = 7; // Start index from where substring should be extracted

// let substring = extractSubstringFromIndex(inputString, startIndex);
// console.log("Original String:", inputString);
// console.log("Substring from index", startIndex, "to end:", substring);

// q10

// function removeDuplicates(inputString) {
//     let charMap = {}; // Object to store encountered characters
//     let result = ''; // String to store non-duplicate characters

//     // Iterate through each character in the input string
//     for (let char of inputString) {
//         // If the character is not already encountered, add it to the result string and mark it as encountered
//         if (!charMap[char]) {
//             result += char;
//             charMap[char] = true;
//         }
//     }

//     return result;
// }

// // Example usage:
// let inputString = "hello world";
// let stringWithoutDuplicates = removeDuplicates(inputString);
// console.log("Original String:", inputString);
// console.log("String without duplicates:", stringWithoutDuplicates);

// q11

// var student = "bilal','shahid";
// console.log(student.lastIndexOf(""))

// // q12

// let text = "Hello planet earth, you are a great planet.";
// console.log(text.lastIndexOf(" planet "));

// // q13

// var inputstring = "abc123234@gmail.com";
// console.log(inputstring);
// console.log(inputstring.slice(3, 9));

// q14

// var username = "basit";

// username.toLowerCase();

// console.log(username.toUpperCase(0));

// q15

// var inputstring = "abcdefgh"
// var  inputString2 = "abcdefg"

// if(inputstring > inputString2){
//     console.log(true);
// }
// else{
//     console.log(false);
// };