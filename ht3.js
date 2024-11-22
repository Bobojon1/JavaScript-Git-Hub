// 1
// function countFood(A, B, C, D) 
// {
//  let priceInDirams = A * 100 + B;  
//  let moneyInDirams = C * 100 + D;  
//  let pies = Math.floor(moneyInDirams / priceInDirams);
//  return pies;
// }
// console.log(countFood(1,30,5,20))


// 2
// function processVariables(A, B, C) {
//  if ((A <= B && B <= C) || (A >= B && B >= C))
//   {
//    A *= 2;
//    B *= 2;
//    C *= 2;
//  }
//   else 
//   {
//    if (A < 0) A = -A;
//    else A = -A;
//    if (B < 0) B = -B;
//    else B = -B;
//    if (C < 0) C = -C;
//    else C = -C;
//  }
//  console.log(A, B, C);
// }
// processVariables(1, 2, -3);   
 

// 3
// function nextEvenandPrev(num)
// {
//  if (num % 2 == 0) return num + 2
//  else return num + 1
// }
// console.log(nextEvenandPrev(4));


// 4
// function subtractNum(num)
// {
//  if(num > 0) return num - 2
//  else if (num < 0) return num + 2
//  else return 10
// }
// console.log(subtractNum(0));




// 6
// function isPerfectNumber(n) 
// {
//  let sum = 0;
//  for (let i = 1; i <= Math.floor(n / 2); i++) if (n % i == 0) sum += i;  
//  return sum == n;
// }
// console.log(isPerfectNumber(28)); 


// 7
// function hasUniqueDigits(n) 
// {
//  let numStr = n.toString();
//  for (let i = 0; i < numStr.length; i++) 
//   {
//    let currentDigit = numStr[i];
//    for (let j = i + 1; j < numStr.length; j++)
//     {
//      if (numStr[j] == currentDigit) return false
//     }
//  }
//  return true;
// }
// console.log(hasUniqueDigits(12345));  





// 9
// function sortDescending(n) 
// {
//  let digits = n.toString().split('');
//  digits.sort((a, b) => b - a);
//  return parseInt(digits.join(''));
// }
// console.log(sortDescending(1254859723));  


// 10
// function reverseFactorial(n) 
// {
//  let sum = 1;
//  for (let i = 2; i <= n; i++) sum *= i;
//  let reversedSum = sum.toString().split('').reverse().join('');
//  return reversedSum 
// }
// console.log(reverseFactorial(5));