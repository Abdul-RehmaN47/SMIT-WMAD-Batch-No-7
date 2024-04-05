// Program 01:
// Write a js program to find the maximum between two numbers.

// let num1= prompt(`Enter first number`)
// console.log( num1 );
// let num2= prompt(`Enter second number`)
// console.log( num2 );
// if (num1>num2) {
//     console.log(`First number is Greater than Second number`);
// } else {
//     console.log(`Second number is Greater than First number`);
//     alert("Second number is Greater than First number")
// }

//                 <------------------------------------------>

// Program 02:
// Write a js program to find the maximum between three numbers.

// let num01= prompt(`Enter first number`)
// console.log( num01 );
// let num02= prompt(`Enter second number`)
// console.log( num02 );
// let num03= prompt(`Enter third number`)
// console.log( num03 );
// if (num01>num02 && num01>num03) {
//     alert("First number is greater than other numbers")
//     console.log(`First number is greater than other numbers`);
// } 
// else if(num02>num01 && num02>num03) {
//     alert(`Second number is greater than other numbers`)
//     console.log(`Second number is greater than other numbers`);
// }
// else if(num03>num01 && num03>num02){
//     alert(`Third number is greater than other numbers`)
//     console.log(`Third number is greater than other numbers`);
// }
// else{
//     alert(`All numbers are equal`)
//     console.log(`All numbers are equal.`)
// }

//                 <------------------------------------------>

// Program 03:
// Write a js program to check whether a number is negative, positive or zero.

// let num=prompt('Enter a number')
// console.log(num);
// if (num>0) {
//     console.log(`You entered a positive number`)
//     alert(`You entered a positive number.`)
// }
// else if (num<0) {
//     console.log(`You entered a negative number`)
//     alert(`You entered a negative number.`)
// }
// else{
//     console.log(`You entered a zero.`)
//     alert(`You entered a zero.`)
// }

//                 <------------------------------------------>

// Program 04:
// Write a js program to check whether a number is divisible by 5 and 11 or not.

// let number=prompt("Enter a Number...")
// console.log(number);
// if (number%5==0 && number%11==0) {
//     console.log(`Your given number is divisible by 5 and 11.`);
//     alert(`Your given number is divisible by 5 and 11.`)
// }
// else{
//     console.log(`Your given number is not divisible by 5 and 11.`);
//     alert(`Your given number is not divisible by 5 and 11.`)
// }

//                 <------------------------------------------>

// Program 05:
// Write a js program to check whether a number is even or odd.
// 
// let num=prompt(`Enter a number...`)
// if (num%2==0) {
//     console.log(`You entered Even Number`);

// }
// else if(num%2!=0)
//     console.log(`You entered Odd Number.`);
// else{
//     console.log(`Number is not even nor odd.`);
// }

//                 <------------------------------------------>

// Program 06:
// Write a js program to check whether a year is leap year or not.

// let year = prompt(`Enter year`); 
// if (year % 4 === 0) {

//     if (year % 100 === 0) {
//         if (year % 400 !== 0) {
//             console.log(year + ' is not a leap year.');
//         } else {
//             console.log(year + ' is a leap year.');
//         }
//     } else {
//         console.log(year + ' is a leap year.');
//     }

// } else {
//        console.log(year + ' is not a leap year.');
// }

//                 <------------------------------------------>

// Program 07:
// Write a js program to input any alphabet and check whether it is vowel or
// consonant.

// const alpha=prompt(`Enter a character:`)
// if (alpha==`A` || alpha==`a` || alpha==`E` || alpha==`e` || alpha==`I` || alpha==`i` || alpha==`O` || alpha==`o` || alpha==`U` || alpha==`u`) {
//     console.log(`You enter a vowel`);
// }
// else{
//     console.log(`Your given alphabet is not a vowel`);
// }

//                 <------------------------------------------>

// Program 08:
// Write a js program to check whether a character is uppercase or
// lowercase alphabet.

// const char = prompt("Enter a character:"); 

// if (char >= 'A' && char <= 'Z') {
//     console.log(char + ' is an uppercase alphabet.');
// } else if (char >= 'a' && char <= 'z') {
//     console.log(char + ' is a lowercase alphabet.');
// } else {
//     console.log(char + ' is not an alphabet.');
// }

//                 <------------------------------------------>

// Program 09:
// Write a js program to input the week number and print weekday.

// const weekNumber = prompt(`Enter the week number (1-7):`)
// if (weekNumber === 1) {
//     console.log(`Monday`);
// } else if (weekNumber === 2) {
//     console.log(`Tuesday`);
// } else if (weekNumber === 3) {
//     console.log(`Wednesday`);
// } else if (weekNumber === 4) {
//     console.log(`Thursday`);
// } else if (weekNumber === 5) {
//     console.log(`Friday`);
// } else if (weekNumber === 6) {
//     console.log(`Saturday`);
// } else if (weekNumber === 7) {
//     console.log(`Sunday`);
// } else {
//     console.log("Invalid week number. Please enter a number between 1 and 7.");
// }

//                 <------------------------------------------>

// Program 10:
// Write a js program to input the month number and print the number of
// days in that month.

// const monthNumber = prompt("Enter the month number (1-12):"); 
// if (monthNumber === "1" || monthNumber === "3" || monthNumber === "5" || monthNumber === "7" || monthNumber === "8" || monthNumber === "10" || monthNumber === "12") {
//     console.log("31 days");
// } else if (monthNumber === "4" || monthNumber === "6" || monthNumber === "9" || monthNumber === "11") {
//     console.log("30 days");
// } else if (monthNumber === "2") {
//     console.log("28 or 29 days (depending on whether it's a leap year)");
// } else {
//     console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

//                 <------------------------------------------>

// Program 12:
// Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// const physicsMarks = prompt("Enter Physics marks:");
// const chemistryMarks = prompt("Enter Chemistry marks:");
// const biologyMarks = prompt("Enter Biology marks:");
// const mathematicsMarks = prompt("Enter Mathematics marks:");
// const computerMarks = prompt("Enter Computer marks:");
// const totalMarks = Number(physicsMarks) + Number(chemistryMarks) + Number(biologyMarks) + Number(mathematicsMarks) + Number(computerMarks);
// const percentage = (totalMarks / 500) * 100;

// let grade;

// if (percentage >= 90) {
//     grade = 'A';
// } else if (percentage >= 80) {
//     grade = 'B';
// } else if (percentage >= 70) {
//     grade = 'C';
// } else if (percentage >= 60) {
//     grade = 'D';
// } else if (percentage >= 40) {
//     grade = 'E';
// } else {
//     grade = 'F';
// }
// console.log("Percentage:", percentage + "%");
// console.log("Grade:", grade);

//                 <------------------------------------------>

// Program 13:
// Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%


// const basicSalary = prompt("Enter the basic salary:");
// const salary = Number(basicSalary);
// let hra, da;
// if (salary <= 10000) {
//     hra = 0.2 * salary;
//     da = 0.8 * salary;
// } else if (salary <= 20000) {
//     hra = 0.25 * salary;
//     da = 0.9 * salary;
// } else {
//     hra = 0.3 * salary;
//     da = 0.95 * salary;
// }
// const grossSalary = salary + hra + da;
// console.log("HRA:", hra);
// console.log("DA:", da);
// console.log("Gross Salary:", grossSalary);

//                 <------------------------------------------>

// Program 14:
// Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


// const unitCharges = prompt("Enter the electricity unit charges:");
// const units = Number(unitCharges);
// let totalBill = 0;
// let surcharge = 0;
// if (units <= 50) {
//     totalBill = units * 0.50;
// } else if (units <= 150) {
//     totalBill = (50 * 0.50) + ((units - 50) * 0.75);
// } else if (units <= 250) {
//     totalBill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
// } else {
//     totalBill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
// }
// surcharge = 0.2 * totalBill;
// totalBill += surcharge;
// console.log("Total Bill:", totalBill)


//                 <------------------------------------------>
