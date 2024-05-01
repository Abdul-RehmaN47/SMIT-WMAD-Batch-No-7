// String Problems:

// a) Return the length of a given string.
// function string(st) {
//     let l = st;
//     return l.length;
// }
// let str = "Abdul Rehman";
// console.log(string(str));
//                                 <----------------------> 

// b) Concatenate two strings together.
// function string(st1 , st2) {
//     let l = st1 + " " + st2;
//     return l;
// }
// let str = "Abdul";
// let stn = "Rehman";
// console.log(string(str , stn));
//                                 <----------------------> 

// c) Determine if a given string is empty.
// function string(st) {
//     if (st == "") {
//         console.log("Empty String");
//     }
//     else 
//     console.log("Non-Empty");
// }
// let str = (prompt("Enter String"));
// string(str);
//                                 <----------------------> 

// d) Count the number of vowels in a string.
// function string(st) {
// count = 0;
// for (let i = 0; i < st.length; i++) {
//     let s =st.charAt(i);
//     if (s == 'a' || s == 'e' || s == 'i'|| s == 'o' || s =='u') {
//       count++;
//     }  
// }
//     return count;
// }
// let str = "abdul rehman";
// string(str);
// console.log("Number of Vowels in string is:" + count);
//                                 <----------------------> 

// e) Reverse a given string.
// function str(st) {
//     let reversed1 = '';
//         for (let j = 7; j >= 0; j--) {
//         let stn = st.charAt(j);
//         reversed1 = reversed1 + stn;
//         }
//         return reversed1;
// }
// let string="abrehman";
// let reversingString=str(string);
// console.log(reversingString);
//                                 <----------------------> 

// f) Check if a string is a palindrome.
// function check(str) {
//     let reversing = '';
//     for (let i = 7; i >= 0; i--) {
//         let st = str.charAt(i);
//         reversing = reversing + st;        
//     }
//         return reversing;
// }
// let string="racecar";
// let palindromecheck = check(string);
// if (string == palindromecheck) {
//     console.log('Your String is a palindrome');
// }
// else{
//     console.log('Your string is not a palindrome');
// }
//                                 <----------------------> 

// g) Convert a string to uppercase.
// function string(st) {
//     let c= st.toUpperCase();
//     return c;
// }
// let sti="hello everyone";
// let conversion=string(sti);
// console.log("Conversion To Uppercase is:" + conversion);
//                                 <----------------------> 

// h) Find the first occurrence of a given character in a string.
// function str(st) {
//     let s = st.indexOf('y');
//     return s;
// }
// let string="hello guys";
// let firstOccurrence=str(string);
// console.log(firstOccurrence);
//                                 <----------------------> 

// i) Replace all occurrences of a given character in a string with another character.
// function str(st) {
//         let newstr= st.replace('g' , 'p');
//         return newstr;
//     }
// let string="hello guys";
// let replacing=str(string);
// console.log(replacing);
//                                 <----------------------> 

// j) Trim leading and trailing whitespace from a string.
// function str(st) {
//     let s = st.trim();
//     return s;
//     }
// let string="                      hello guys  ";
// let triming=str(string);
// console.log(triming);
//                                 <----------------------> 

// k) Count the number of words in a string.
// function str(st) {
//     let count=1;
//     for (let i = 0; i < st.length; i++) {
//     if (st[i] === ' ' || st[i] === '\t' || st[i] === '\n') 
//     count++;
// }
// return count;
// }
// let string = "hello friends we enjoy programming this is amazing use of technology and we like it very much";
// let counting = str(string);
// console.log(counting);
//                                 <----------------------> 

// l) Check if a string contains only numeric characters.
// function str(st) {
//     for (let i = 0; i < st.length; i++) {
//     if (st[i] < '0' || st[i] > '9'){
//     return false;
//     }
// }
//     return true;
// }
// let string="we are 2 brothers and we eat 4 breads."
// let strings="1234567890"
// let checking=str(string);
// console.log(checking);
// console.log(str(strings));
//                                 <----------------------> 

// m) Check if a string is a valid email address.
// function str(st) {
//     for (let i = 0; i < st.length; i++) {
//         if (st[i] == '@') {
//             let valid="yes it's valid email"
//             return valid;

//         }
//     }
//     let nonvalid="No it's not a valid emaiil"
//     return nonvalid;
// }
// let string="abrehman@124.gmail.com";
// console.log(str(string));
//                                 <----------------------> 

// n) Extract the domain name from a URL string.
// function str(st) {
//         const url = new URL(st);
//         const domain = url.hostname;
//         return domain;
// }
// let string = "http://www.example.com";
// console.log(str(string));
//                                 <----------------------> 

// o) Convert a string into title case (the first letter of each word capitalized).
// function toTitleCase(str) {
//     const words = str.split(' ');
//     const titleCasedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });
//     return titleCasedWords.join(' ');
// }
// let exampleString = "this is an example string";
// let titleCasedString = toTitleCase(exampleString);
// console.log(titleCasedString);
//                                 <----------------------> 

// p) Remove all non-alphabetic characters from a string.
// function removeNonAlphabetic(str) {
//     let filteredChars = [];
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//       if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//             filteredChars.push(char);
//         }
//     }
//     return filteredChars.join('');
// }
// let exampleString = "Hello, world! 123.";
// let cleanedString = removeNonAlphabetic(exampleString);
// console.log(cleanedString); 
//                                 <----------------------> 

// q) Check if a string is a valid palindrome permutation (ignoring spaces).
// function isPalindromePermutation(str) {
//     const cleanedString = str.replace(/\s/g, '').toLowerCase();
//     const oddChars = new Set();
//     for (let char of cleanedString) {
//         if (oddChars.has(char)) {
//             oddChars.delete(char);
//         } else {
//             oddChars.add(char);
//         }
//     }
//    return oddChars.size <= 1;
// }
// let exampleString = "Tact Coa"; 
// let isPalindromePerm = isPalindromePermutation(exampleString);
// console.log(isPalindromePerm); 
//                                 <----------------------> 

// r) Check if a string is an anagram of another string.
// function areAnagramsCharFrequency(str1, str2) {
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const charFrequency1 = {};
//     const charFrequency2 = {};
//     for (let char of str1) {
//         charFrequency1[char] = (charFrequency1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         charFrequency2[char] = (charFrequency2[char] || 0) + 1;
//     }
//     for (let char in charFrequency1) {
//         if (charFrequency1[char] !== charFrequency2[char]) {
//             return false;
//         }
//     } 
//     return true;
// }
// let str1 = "listen";
// let str2 = "silent";
// console.log(areAnagramsCharFrequency(str1, str2));
//                                 <----------------------> 

// s) Find the longest word in a string.
// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     for (let word of words) {
//             if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// let exampleString = "The quick brown fox jumps over the lazy dog";
// let longestWord = findLongestWord(exampleString);
// console.log(longestWord); 
//                                 <----------------------> 

// t) Perform string compression by replacing repeated characters with the character followed by the count.
// function compressString(str) {
//     let compressed = '';
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             compressed += str[i] + count;
//             count = 1;
//         }
//     }
//     return compressed.length < str.length ? compressed : str;
// }
// let exampleString = "aaabbbccdd";
// let compressed = compressString(exampleString);
// console.log(compressed); 
//                                 <----------------------> 
//                              <----------The End-----------> 
