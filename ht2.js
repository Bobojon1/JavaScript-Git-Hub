// 1
// function flip (num)
// {
//  return num == 1? 0 : 1
// }
// console.log(flip(0));


// 2
// function equation(num1, num2)
// {
//  return -num2 / num1
// }
// console.log(equation(2,3));


// 3
// function points(num1, num2)
// {
//  num1 = num1 * 2
//  num2 = num2 * 3
//  return num1 + num2
// }
// console.log(points(7,5));


// 4
// function isPow(num)
// {
//  for (let i = 0; i < num; i++) 
//   {
//    if (Math.pow(i, 2) == num) return true
//   }
//   return false
// }
// console.log(isPow(16));


// 5
// function largestSwap(num)
// {
//  let num1 = num / 10 % 10
//  let num2 = num % 10
//  return num1 > num2 ? false : true
// }
// console.log(largestSwap(43)); 


// 1
// function makesTen(num1, num2) 
// {
//  if (num1 == 10 || num2 == 10 || num1 + num2 == 10) return true
//  return false
// }
// console.log(makesTen(1,8));


// 2 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// 3
// function fibonachiNum (number)
// {
//  if (number <= 1) return number
//  let a = 0
//  let b = 1
//  for (let i = 2; i <= number; i ++)
//   {
//    let result = a + b
//    a = b
//    b = result
//   }
//   return b
// }
// console.log(fibonachiNum(8));


// 4

// function power(num1, num2) 
// {
//  return num1 ** num2;
// }
// console.log(power(5, 5));  


// 5
// function largestSwap(num)
// {
//  let num1 = num / 10 % 10
//  let num2 = num % 10
//  return num1 > num2 ? true : false
// }
// console.log(largestSwap(27));


// 6
// Функция для проверки, является ли число простым
// function primeInRange(num) 
// {
//  if (num < 2) return false;  
//  for (let i = 2; i < num; i++) if (num % i === 0) return false;  
//  return true;  
// }
// function hasPrimeInRange(start, end) 
// {
//  for (let i = start; i <= end; i++) if (primeInRange(i)) return true
//  return false;  
// }
// console.log(hasPrimeInRange(10, 66));  


// 7
// function numbersSquares(n) 
// {
//  let sum = 0;  
//  for (let i = 1; i <= n; i++) sum += i * i; 
//  return sum; 
// }
// console.log(numbersSquares(4)); 


// 8 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// 9 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// 10 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// 11
// function factorial(num)
// {
//  let sum = 1;
//  for (let i = 1; i <= num; i++) sum *= i
//  return sum;
// }
// console.log(factorial(5));


// 12
// Функция для нахождения суммы цифр числа без использования toString и Math.abs
// function sumOfNumbers(number) 
// {
//  let sum = 0;
//  for (; number > 0; number = Math.floor(number / 10)) sum += number % 10;  
//  return sum;  
// }
// console.log(sumOfNumbers(12349)); 


// 13
// function nTablesPlusOne(num)
// {
//  let numv2 = num + 1
//  let result = "" + numv2 + ","
//  for (let i = 1; i < 10; i++) 
//   {
//    result += numv2 + num + ","
//    numv2 = numv2 + num
//   }
//   return result
// }
// console.log(nTablesPlusOne(7));


// 14
// function isPrime(number) 
// {
//  if (number <= 1) return false;  
//  for (let i = 2; i < number; i++) if (number % i == 0) return false; 
//  return true;
// }
// function isPalindrome(number) 
// {
//  let str = number.toString();  
//  return str == str.split('').reverse().join('');  
// }
// function isPrimeAndPalindrome(number)
// {
//  return isPrime(number) && isPalindrome(number); 
// }
// console.log(isPrimeAndPalindrome(131));  


// 15 
// function calculateFuel(num)
// {
//  return num * 10
// }
// console.log(calculateFuel(23.5));