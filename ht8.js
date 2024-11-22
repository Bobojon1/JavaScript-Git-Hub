// function prodArray (arr)
// {
//  let sum = 1;
//  for(let elem of arr)sum *= elem;
//  return sum;
// }
// console.log(prodArray([7, 13, 2, 6, 4]));


// function findMinMax(arr) 
// {
//  let maxNum = Math.max(...arr);
//  let minNum = Math.min(...arr);
//  return [maxNum, minNum]; 
// }
// console.log(findMinMax([7, 13, 2, 6, 4]));


// function isPrime(num) 
// {
//  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i == 0) return false;
//  return true; 
// }
// console.log(isPrime([7, 13, 2, 6, 4]));


// function Sort(arr) 
// {
//  let num = arr.length;
//  for (let i = 0; i < num - 1; i++) {
//   for (let j = 0; j < num - 1 - i; j++) {
//    if (arr[j] > arr[j + 1]) {
//     let sum = arr[j];
//     arr[j] = arr[j + 1];
//     arr[j + 1] = sum;
//             }
//         }
//     }
//     return arr;
// }
// console.log(Sort([7, 13, 2, 6, 4]));


// function checkForSeven(arr) 
// {
//  if (arr.includes(7)) return ("Boom");
//  else return ("Not");
    
// }
// console.log(checkForSeven([1, 2, 3, 4, 5, 6, 7]));


// function factorial(num) 
// {
//  let result = 1;
//  for (let i = 2; i <= num; i++) result *= i;
//  return result;
// }
// console.log(factorial([1, 2, 3, 4, 5]));


// function calculateRange(arr) 
// {
//  let max = Math.max(...arr); 
//  let min = Math.min(...arr); 
//  return max - min; 
// }
// console.log(calculateRange([7, 13, 2, 6, 4]));


// function isEqualToIndex(arr) 
// {
//  for (let i = 0; i < arr.length; i++) if (arr[i] != i) return false; 
//  return true; 
// }
// console.log(isEqualToIndex([0, 1, 2, 3, 4, 5, 6, 7]));


// function getArrayLength(arr) 
// {
//  let sum = 0; 
//  for (let element of arr) sum++; 
//  return sum;
// }
// console.log(getArrayLength([0, 0, 0]));