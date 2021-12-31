/* -------------------------------------------------------------------------- */
/*                                 First Task                                 */
/* -------------------------------------------------------------------------- */
// 1- Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5

// var number = window.prompt("Please Insert a Number");
// alert(Number(number));

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                                 Second Task                                */
/* -------------------------------------------------------------------------- */

// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No

// var number = window.prompt("Please Insert a Number");
// if (Number(number) % 3 === 0 && Number(number) % 4 === 0) {
//     alert("Yes");
// } else {
//     alert("No");
// }

//------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------- */
/*                                 Third Task                                 */
/* -------------------------------------------------------------------------- */

// 3- Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10

// var firstNumber = window.prompt("Insert First Number");
// var secondNumber = window.prompt("Insert Second Number");
// if (Number(firstNumber) > Number(secondNumber)) {
//     alert(Number(firstNumber));
// } else {
//     alert(Number(secondNumber))
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                                 Fourth Task                                */
/* -------------------------------------------------------------------------- */

// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative
// Example2
// Input: 10
// Output positive

// var number = window.prompt("Please Insert a Number");
// if (Number(number) > 0) {
//     alert("positive");
// } else {
//     alert("negative");
// }

//------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------- */
/*                                 Fifth Task                                 */
/* -------------------------------------------------------------------------- */

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.
// Example 1
//  Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9
// Outputs:
// Max element = 9
// Min element = 3

// var firstNumber = window.prompt("Insert First Number");
// var secondNumber = window.prompt("Insert Second Number");
// var thirdNumber = window.prompt("Insert Third Number");
// var maxNumber = Math.max(Number(firstNumber), Number(secondNumber), Number(thirdNumber));
// var minNumber = Math.min(Number(firstNumber), Number(secondNumber), Number(thirdNumber));
// alert("Max Element= " + maxNumber + "\n" + "Min Element= " + minNumber);

//------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------- */
/*                                  Sixth Task                                  */
/* -------------------------------------------------------------------------- */

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd
// Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd

// var number = window.prompt("Please a Number");
// if (Number(number) % 2 == 0) {
//     alert("Even");
// } else {
//     alert("Odd");
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                                Seventh Task                                */
/* -------------------------------------------------------------------------- */

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant

// var character = prompt("Please Insert a character");
// if (character === 'a' ||
//     character === 'A' ||
//     character === 'e' ||
//     character === 'E' ||
//     character === 'i' ||
//     character === 'I' ||
//     character === 'o' ||
//     character === 'O' ||
//     character === 'u' ||
//     character === 'U') {
//     alert("Vowel");
// } else {
//     alert("Constant");
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                                 Eighth Task                                 */
/* -------------------------------------------------------------------------- */
// 9- Write a program that allows user to insert integer then print all numbers between 1 to
// that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

// var number = prompt("Please Insert a Number");
// for (i = 0; i <= number; i++) {
//     alert(i)
// }

//------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------- */
/*                                 Ninth Task                                 */
/* -------------------------------------------------------------------------- */

// 9- Write a program that allows user to insert integer then print a multiplication table up to 12
// Example
// Input: 5
// Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

// var number = prompt("Please Insert a Number");

// for (i = 1; i <= 12; i++) {
//     console.log(i * Number(number))
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                                 Tenth Task                                 */
/* -------------------------------------------------------------------------- */

// 10- Write a program that allows to user to insert number then print all even numbers
// between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14
// var number = prompt("Please Insert a Number");
// for (i = 1; i <= number; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                                Eleventh Task                               */
/* -------------------------------------------------------------------------- */

// 11- Write a program that take two integers then print the power
// Example:
// Input: 4 3
// Output: 64
// Hint how to calculate 4^3 = 4 * 4 * 4 =64
// var number = prompt("Please Insert a Number");
// var power = prompt("Please Insert a Power");
// var result = Math.pow(Number(number), Number(power));
// alert(Number(result));

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                                Twelfth Task                                */
/* -------------------------------------------------------------------------- */
// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
//  Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
//  Average Marks =87
// Percentage =87

// alert("Enter Marks of five subjects")
// var firstSubject = prompt('First Subject');
// var secondSubject = prompt('Second Subject');
// var thirdSubject = prompt('Third Subject');
// var fourthtSubject = prompt('Fourth Subject');
// var fifthSubject = prompt('Fifth Subject');
// var totalMark = Number(firstSubject) + Number(secondSubject) +
//     Number(thirdSubject) + Number(fourthtSubject) + Number(fifthSubject);
// var averageMark = Number(totalMark) / 5;
// var percentageMark = (Number(totalMark) / 435) * 100;
// alert ("Total Marks: " + Number(totalMark) + "\n" +
// "Average Marks: " + Number(averageMark) + "\n" +
// "Percentage: " + Number(percentageMark) + "%");

//------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------- */
/*                               Thirteenth Task                              */
/* -------------------------------------------------------------------------- */

// 13- Write a program to input month number and print number of days in that
// month.
// Example:
// Input: - Month Number: 1
//  Output:-. Days in Month: 31

// var monthNumber = prompt('Please Insert Month Number')
// if (Number(monthNumber) === '1') {
//   alert('Days in Month: 31');
// } else if (Number(monthNumber) === '2') {
//   alert('Days in Month: 28 in a common year and 29 days in leap years');
// } else if (Number(monthNumber) === '3') {
//   alert('Days in Month: 31');
// } else if (Number(monthNumber) === '4') {
//   alert('Days in Month: 30');
// } else if (Number(monthNumber) === '5') {
//   alert('Days in Month: 31');
// } else if (Number(monthNumber) === '6') {
//   alert('Days in Month: 30');
// } else if (Number(monthNumber) === '7') {
//   alert('Days in Month: 31');
// } else if (Number(monthNumber) === '8') {
//   alert('Days in Month: 31');
// } else if (Number(monthNumber) === '9') {
//   alert('Days in Month: 30');
// } else if (Number(monthNumber) === '10') {
//   alert('Days in Month: 31');
// } else if (Number(monthNumber) === '11') {
//   alert('Days in Month: 30');
// } else {
//   alert('Days in Month: 31');
// }

//------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------- */
/*                               Fourteenth Task                              */
/* -------------------------------------------------------------------------- */
// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

// alert('Enter Marks of five subjects');
// var firstSubject = prompt('Physics Subject');
// var secondSubject = prompt('Chemistry Subject');
// var thirdSubject = prompt('Biology Subject');
// var fourthtSubject = prompt('Mathematics Subject');
// var fifthSubject = prompt('Computer Subject');
// var totalMark = Number(firstSubject) + Number(secondSubject) + Number(thirdSubject) + Number(fourthtSubject) + Number(fifthSubject);
// var percentageMark = (Number(totalMark) / 435) * 100;
// if (percentageMark >= 90) {
//     alert ("Grade A")
// } else if (percentageMark >= 80) {
//     alert ("Grade B")
// } else if (percentageMark >= 70) {
//     alert ("Grade C")
// } else if (percentageMark >= 60) {
//     alert ("Grade D")
// } else if (percentageMark >= 40) {
//     alert ("Grade E")
// } else if (percentageMark < 40) {
//     alert ("Grade F")
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                               Fifteenth Task                               */
/* -------------------------------------------------------------------------- */

// 15- Write a program to print total number of days in month

// var monthNumber = prompt('Please Insert Month Number')
// switch (monthNumber) {
//   case '1':
//     alert('Days in This Month Are: 31')
//     break;
//   case '2':
//     alert('Days in This Month Are: 28 in a common year and 29 days in leap years')
//     break;
//   case '3':
//     alert('Days in This Month Are: 31');
//     break;
//   case '4':
//     alert('Days in This Month Are: 30');
//     break;
//   case '5':
//     alert('Days in This Month Are: 31');
//     break;
//   case '6':
//     alert('Days in This Month Are: 30');
//     break;
//   case '7':
//     alert('Days in This Month Are: 31');
//     break;
//   case '8':
//     alert('Days in This Month Are: 31');
//     break;
//   case '9':
//     alert('Days in This Month Are: 30');
//     break;
//   case '10':
//     alert('Days in This Month Are: 31');
//     break;
//   case '11':
//     alert('Days in This Month Are: 30');
//     break;
//   case '12':
//     alert('Days in This Month Are: 31');
//     break;
//   default:
//     alert('error')
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                               Sixteenth Task                               */
/* -------------------------------------------------------------------------- */

// 16-  Write a program to check whether an alphabet is vowel or consonant
// var character = prompt('Please Insert a character')
// switch (character) {
//   case 'a':
//     alert('Vowel')
//     break
//   case 'A':
//     alert('Vowel')
//     break
//   case 'e':
//     alert('Vowel')
//     break
//   case 'E':
//     alert('Vowel')
//     break
//   case 'i':
//     alert('Vowel')
//     break
//   case 'I':
//     alert('Vowel')
//     break
//   case 'o':
//     alert('Vowel')
//     break
//   case 'O':
//     alert('Vowel')
//     break
//   case 'u':
//     alert('Vowel')
//     break
//   case 'U':
//     alert('Vowel')
//     break
//   default:
//     alert('Constant')
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                              seventeenth Task                              */
/* -------------------------------------------------------------------------- */

// 17-  Write a program to find maximum between two numbers
// var firstNumber = prompt('Enter The First Number')
// var secondNumber = prompt('Enter The First Second')

// switch (firstNumber > secondNumber) {
//   case true:
//     alert('Maximum Number is: ' + firstNumber);
//     break;
//   case false:
//     alert('Maximum Number is: ' + secondNumber);
//     break;
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                               Eighteenth Task                              */
/* -------------------------------------------------------------------------- */

// 18-  Write a program to check whether a number is even or odd
// var number = prompt('Enter a Number')
// switch (number % 2 == 0) {
//   case true:
//     alert('This ' + number + ' is Even');
//     break;
//   case false:
//     alert('This ' + number + ' is Odd');
//     break;
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                               Nineteenth Task                              */
/* -------------------------------------------------------------------------- */

// 19- Write a program to check whether a number is positive or negative or zero

// var number = prompt('Enter a Number')
// switch (number > 0) {
//   case true:
//     alert('This ' + number + ' is Positive')
//     break
//   case false:
//     alert('This ' + number + ' is Negative')
//     break
//   default:
//     alert('This ' + number + ' is Equals to Zero')
// }

//------------------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                               Twentieth Task                               */
/* -------------------------------------------------------------------------- */

// 20- Write a program to create Simple Calculator

// var operator = prompt('Enter operator ( either +, -, * or / ): ')
// var firstNumber = prompt('Enter first number: ')
// var secondNumber = prompt('Enter second number: ')
// switch (operator) {
//   case '+':
//     alert('Result is: ' + (Number(firstNumber) + Number(secondNumber)))
//     break
//   case '-':
//     alert('Result is: ' + (Number(firstNumber) - Number(secondNumber)))
//     break
//   case '*':
//     alert('Result is: ' + Number(firstNumber) * Number(secondNumber))
//     break
//   case '/':
//     if (Number(secondNumber) <= 0) {
//       alert('Invalid number')
//     } else {
//       alert('Result is: ' + Number(firstNumber) / Number(secondNumber))
//     }
//     break
//   default:
//     alert('Invalid operator')
//     break
// }
