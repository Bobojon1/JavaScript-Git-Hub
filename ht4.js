// 1
// function sumDigit(number) 
// {
//  if (number == 0) return 0;
//  return number % 10 + sumDigit(Math.floor(number / 10));
// }
// console.log(sumDigit(123));  


// 3
// function evenRecursion(num)
// {
//  if (num == 0) return true;
//  if (num == 1) return false;
//  return evenRecursion(num - 2);
// }
// console.log(evenRecursion(11));


// 4
// function doubleFactorial(num) 
// {
//  if (num <= 0) return 1;
//  return num * doubleFactorial(num - 2);
// }
// console.log(doubleFactorial(9)); 


// 5
// function power(num, dar)
// {
//  if (dar == 0) return 1;
//  return num * power(num, dar - 1)
// }
// console.log(power(2,4));