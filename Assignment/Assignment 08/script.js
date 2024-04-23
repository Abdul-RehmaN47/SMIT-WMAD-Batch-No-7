//                           LOOPS Assignment
// Program 01:
// Write a JS code to print numbers from 1 to 10.
// for (let i = 1; i < 11; i++) {
//     console.log(i);    
// }
//                     <------------------------------------->

// Program 02:
// Write a JS code to print Even numbers in given array.
// var array=[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i <= 10; i++) {
// if (array[i]%2==0) {
//     console.log(array[i]);
// }
// }
//                     <------------------------------------->

// Program 03:
// 3. Write a JS code to delete all occurrence of element in given array.

// function removeAllOccurrences(arr, element) {
//     let newArray = [];
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] !== element) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }
// const originalArray = [1, 2, 3, 4, 2, 5, 2];
// const elementToRemove = 2;
// const newArray = removeAllOccurrences(originalArray, elementToRemove);
// console.log(newArray)

//                     <------------------------------------->

// Program 04:
// 4. Write a JS code to find the power of a number using for loop.
// let array = [1, 2, 3, 4, 5, ];
// for (let i = 0; i < array.length; i++) {
//     let base = array[i];
//     let exponent = 2; // You can change this to any exponent you want
//     let result = 1;

//     for (let j = 0; j < exponent; j++) {
//         result *= base;
//     }
//     console.log(`${base}`,`raised to the power of`,`${exponent}`,`is`,`${result}`); 
// }
//                     <------------------------------------->
 
// Program 05:
// Write a JS code to print a pattern using for loop:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8.

// for (let i = 1; i < 9; i++) {
// let numpattern = ` `
//     for (let j = 1; j <= i; j++) {
//     numpattern += j
//     }
//     console.log(numpattern);
// }

//                     <------------------------------------->

// Program 06:
// Write a JS code to find the no of digits in a number.

// let number = 520748392;
// let numOfdigits = number.toString();
// let lengthOfnumber = numOfdigits.length;
// console.log(`The length is` , `${lengthOfnumber}`);

//                     <------------------------------------->

// Program 07:
// Write a JS code to calculate the sum of digits in a number.
// function sumOfDigits(number) {
//     let numberString = number.toString();
//     let sum = 0;
//     for (let i = 0; i < 5; i++) {
//     sum = sum + parseInt(numberString[i]);
//     }
//     return sum;
// }
// const number = 12345;
// const result = sumOfDigits(number);
// console.log(`The sum of digits in ${number} is: ${result}`);

// //                     <------------------------------------->

// Program 08:
// Write a JS code to find the largest number in an array
// function findLargestNumber(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// const numbers = [3, 7, 1, 9, 2, 12, 5];
// const largestNumber = findLargestNumber(numbers);
// console.log(`The largest number in the array is: ${largestNumber}`);

// //                     <------------------------------------->

// Program 09:
// Write a JS code to print the Fibonacci series for a given value of N.

// function printFibonacciSeries(N) {
//     let a = 0;
//     let b = 1;
//     console.log(a);
//     if (N > 1) {
//         console.log(b);
//     }
//     for (let i = 2; i < N; i++) {
//         let next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }
// const N = 10; 
// printFibonacciSeries(N);

// //                     <------------------------------------->

// Program 10:
// Write a JS code to find duplicate values in a given array.

// function findDuplicates(arr) {
//     let duplicates = [];
//     let counts = {};
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         counts[num] = counts[num] ? counts[num] + 1 : 1;
//     }
//     for (let num in counts) {
//         if (counts[num] > 1) {
//             duplicates.push(Number(num));
//         }
//     }
//     return duplicates;
// }
// const array = [1, 4, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8, 9];
// console.log("Duplicate values in the array:", findDuplicates(array));

// //                     <------------------------------------->

// Program 11:
// Write a JS code for Linear search algorithm.

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// const numbers = [10, 25, 47, 59, 33, 72, 81, 64];
// const target = 33;
// const index = linearSearch(numbers, target);
// if (index !== -1) {
//     console.log(`Element ${target} found at index ${index}.`);
// } else {
//     console.log(`Element ${target} not found in the array.`);
// }

// //                     <------------------------------------->

// Program 12:
// Write a JS code for Binary search algorithm

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2);
//         if (arr[middle] === target) {
//             return middle;
//         }
//         if (target < arr[middle]) {
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
//     }
//      return -1;
// }
// const sortedNumbers = [10, 25, 47, 59, 64, 72, 81, 95];
// const target = 64;
// const index = binarySearch(sortedNumbers, target);
// if (index !== -1) {
//     console.log(`Element ${target} found at index ${index}.`);
// } else {
//     console.log(`Element ${target} not found in the array.`);
// }

// //                     <------------------------------------->
