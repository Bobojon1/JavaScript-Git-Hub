// 1
// function sumTwoNumber(num1, num2)
// {
//  return num1 + num2
// }
// console.log(sumTwoNumber(2,3));


// 2
// function checkNumber(num)
// {
//  return num > 0? "Positive" :num < 0? "Negative" :"Zero"
// }
// console.log(checkNumber(-9));


// 3
// function generateMultiplicationTable(num)
// {
//  let res = ''
//  for (let i = 0; i <= 10; i++) res += `${num} * ${i} = ${num * i} \n`
//  return res
// }
// console.log(generateMultiplicationTable(5));

// 4
// function endNine(num)
// {
//  if (num % 10 == 9) return "True"
//  else return "False"
// }
// console.log(endNine(129));

// 4 v2
// function endNine(num)
// {
//  return num % 10 == 9
// }
// console.log(endNine(1290));


// 5 v2
// function getCentury(year)
// {
//  return Math.ceil(year / 100);
// }
// console.log(getCentury(2099)); 

// 5 v3
// function century(year) 
// {
//  return  Math.floor(year % 100 == 0 ? year / 100 : (year / 100) + 1)
// }
// console.log(century(2001));

// 5 v4
// function getCentury(year)
// {
//  return Math.floor((year - 1) / 100) + 1;
// }
// console.log(getCentury(2030)); 


// 6
// function longestTime(h, m, s) 
// {
//  let hours = h * 3600;
//  let minutes = m * 60;
//  let seconds = s;
//  if (hours >= minutes && hours >= seconds) return h
//  else if (minutes >= hours && minutes >= seconds) return m
//  else return s 
// }
// console.log(longestTime(1, 59, 3598));   

// 6 v2
// function longestTime(h, m, s) 
// {
//  let hours = h * 3600;  
//  let minutes = m * 60; 
//  let seconds = s;
//  let max = Math.max(hours, minutes, seconds);
//  if (max == hours) return h 
//  else if (max == minutes) return m 
//  else return s 
// }
// console.log(longestTime(1, 59, 3598));  


// 7
// function same(number)
// {
//  let hundreds = Math.floor(number / 100); 
//  let tens = Math.floor((number % 100) / 10);
//  let ones = number % 10;
//  if (hundreds == tens || hundreds == ones || tens == ones) return true; 
//  return false;
// }
// console.log(same(113)); 

// 7 v2
// function same(number) 
// {
//  let str = number.toString();
//  if (str[0] == str[1] || str[0] == str[2] || str[1] == str[2]) return true; 
//  return false;
// }
// console.log(same(133)); 


// 8 ???????????????????????????????????????????????
// function largestSwap(num)
// {
//  let num1 = num / 10
//  let num2 = num % 10;
//  if (num1 > num2) return true
//  else return false
// }
// console.log(largestSwap(35));

// 9
// function addUp(num)
// {
//  let sum = 0;
//  for (let i = 1; i <= num; i++) sum += i;
//  return sum;
// }
// console.log(addUp(5));

// 9 v2
// function addUp(num)
// {
//  return (num * (num + 1)) / 2
// }
// console.log(addUp(5))


// 10
// function different(a, b, c) 
// {
//  if (a == b) return 3
//  else if (a == c) return 2;
//  else return 1; 
// }
// console.log(different(5, 5, 3)); 

// 10 v2
// function different(a, b, c)
// {
//  return a == b ? 3 : a == c ? 2 : 1;
// }
// console.log(different(5, 5, 3)); 


// 11
// function evenNum(num, num2) 
// {
//  let sum = 0;
//  for (let i = num; i <= num2; i++) if (i % 2 == 0) sum += i;
//  return sum;
// }
// console.log(evenNum(-5, -3));


// 12
// function maxNum(num)
// {
//  let max = -999999
//  for (let i = num; i > 0; i /= 10)
//   {
//    if (i % 10 >= max) max = i % 10
//   }
//   return max
// }
// console.log(maxNum(127));


// 13
// function minOrMax(num) 
// {
//  let max = -9;
//  let min = 9;
//  for (let i = num; i > 0; i = Math.floor(i / 10))
//   {
//    if (i % 10 > max) max = i % 10;
//    if (i % 10 < min) min = i % 10;
//   }
//  return {min, max}
// }
// console.log(minOrMax(345));  


// 14
// function prodDigits(num)
// {
//  let cnt = 1;
//  for (;num > 0; num = Math.floor(num / 10))
//   { 
//    cnt *= num % 10
//  }
//  return cnt;
// }
// console.log(prodDigits(713));  


// 15
// function isSymmetrical(num)
// {
//   let cnt = ''
//   for (let i = num; i > 0; i = Math.floor (i / 10)) cnt += i % 10
//   if (cnt == num) return true
//   return false
// }
// console.log(isSymmetrical(7227));


// 16
// function addDigits(num) 
// {
//  let sum = 0;
//  if (num < 10) return num;
//  for (; num > 0; num = Math.floor(num / 10)) sum += num % 10;
//  return addDigits(sum);
// }
// console.log(addDigits(38));  


// 17
// function isPrime(num) 
// {
//  if (num < 2) return false;
//  for (let i = 2; i < num; i++) if (num % i == 0) return false; 
//  return true;  
// }
// console.log(isPrime(8));   


// 18
// function factorial(num)
// {
//  let sum = 1;
//  for (let i = 1; i <= num; i++) sum *= i
//  return sum;
// }
// console.log(factorial(5));


// 19
// function calculateCircleArea(radius) 
// {
//  let pi = 3.14;
//  return Math.ceil(pi * radius * radius)
// }
// console.log(calculateCircleArea(5));


// 20
// function sum3Digit(num) 
// {
//  let hundreds = Math.floor(num / 100);     
//  let tens = Math.floor((num % 100) / 10); 
//  let ones = num % 10;                    
//  return hundreds + tens + ones;
// }
// console.log(sum3Digit(479));


// 21
// function sumOfDigits(num)
// {
//  return num % 2 == 0? num + 1 : num - 2
// }
// console.log(sumOfDigits(11));


// 22
// function doubleEachDigit (number)
// {
//  let res = ''
//  for(let i = number; i > 0; i = Math.floor(i / 10)) res += i % 10;
//  let result = "";
//  for(let i = res; i > 0; i = Math.floor(i / 10)) result += (i % 10) * 2;
//  return result
// }
// console.log(doubleEachDigit(897));


// 23
// function lessThan100(num1, num2)
// {
//  return num1 + num2 <= 100
// }
// console.log(lessThan100(22, 15));


// 24
// function perimetr(num)
// {
//  return num * 4
// }
// console.log(perimetr(7));


// 25
// function area(num)
// {
//  let s = num * num
//  return s
// }
// console.log(area(8));


// 26
// function averageNum(num1, num2)
// {
//  return (num1 + num2) / 2
// }
// console.log(averageNum(7,9));


// 27
// function evenOrOdd(num)
// {
//  return num % 2 == 0? "3" : "4";
// }
// console.log(evenOrOdd(7));


// 28
