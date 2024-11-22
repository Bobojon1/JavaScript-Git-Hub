// 1
// function mergeArrays(...arrays) 
// {
//  return [].concat(...arrays);
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let result = mergeArrays(array1, array2);
// console.log(result);

// 1 v2
// function mergeArrays(...arrays) 
// {
//  return [].concat(...arrays); 
// }
// console.log(mergeArrays([1,2,3], [1,2,3]));


// 2
// function findIndex(arr, elem) 
// {
//  return arr.indexOf(elem);
// }
// console.log(findIndex([1, 2, 3], 1)); 


// 3 ???????????????????????????????????????????????????????????????????????????????????????????
// 3 OK
// function removeDuplicates(arr) 
// {
//  return Array.from(new Set(arr));
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// 4
// function removeNegatives(arr) 
// {
//  return arr.filter(num => num >= 0);
// }
// console.log(removeNegatives([1,2,3,-2,-2,3,4]));


// 5
// function calculateAverage(numbers) 
// {
//  let sum = numbers.reduce((acc, num) => acc + num, 0);
//  return sum / numbers.length;
// }
// console.log(calculateAverage([2, 4, 6, 8, 10])); 

// 5 v2
// function calculateAverage(num) 
// {
//  let sum = 0;
//  for (let i = 0; i < num.length; i++) sum += num[i];
//  return sum / num.length;
// }
// console.log(calculateAverage([2, 4, 6, 8, 10])); 


// 6
// function isPalindromeArray(array) 
// {
//  let reversedArray = [...array].reverse();
//  return array.every((item, index) => item == reversedArray[index]);
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1]));

// 6 v2
// function isPalindromeArray(array) 
// {
//  for (let i = 0; i < array.length / 2; i++) 
//   {
//   if (array[i] != array[array.length - 1 - i]) return false; 
//  }
//  return true;
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1])); 

// 6 v3
// function isPalindromeArray(array) 
// {
//  return array.join('') == array.reverse().join('');
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1]));

// 6 v4
// function isPalindromeArray(array) 
// {
//  let reversedArray = [...array].reverse(); 
//  return array.join('') == reversedArray.join('');
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1]));

// 6 v5
// function isPalindromeArray(array) 
// {
//  return array.join('') == array.toReversed().join('');
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1]));


// 7
// function arrBetween(num1, num2, arr) 
// {
//  return arr.filter(num => num > num1 && num < num2);
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); 

// 7 v2
// function arrBetween(num1, num2, arr) 
// {
//  let res = [];
//  for (let i = 0; i < arr.length; i++) if (arr[i] > num1 && arr[i] < num2) res.push(arr[i]); 
//  return res;
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))


// 8
// function sumArray(arr) 
// {
//  let sum = 0;
//  for (let i = 0; i < arr.length; i++) sum += arr[i]; 
//  return sum; 
// }
// console.log(sumArray([1, 2, 3, 4, 5])); 

// 8 v2
// function sumArray(arr) 
// {
//  return arr.reduce((acc, num) => acc + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4, 5])); 


// 9
// function arrayValuesTypes(arr) 
// {
//  return arr.map(item => typeof item);
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));

// 9 v2
// function arrayValuesTypes(arr) 
// {
//  let typesArray = [];
//  for (let i = 0; i < arr.length; i++) typesArray.push(typeof arr[i]); 
//  return typesArray;
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));


// 10
// function wordLengths(arr) 
// {
//  let lengthsArray = [];
//  for (let i = 0; i < arr.length; i++) lengthsArray.push(arr[i].length); 
//  return lengthsArray;
// }
// console.log(wordLengths(["hello", "world"])); 

// 10 v2
// function lengthsArray(arr) 
// {
//  return arr.map(word => word.length);
// }
// console.log(lengthsArray(["hello", "world"])); 


// 11 ???????????????????????????????????????????????????????????????????????????????????
// 11 OK
// function checkSquareAndCube(arr) 
// {
//  let squareRoot = Math.sqrt(arr[0]); 
//  let cubeRoot = Math.cbrt(arr[1]); 
//  return squareRoot == cubeRoot; 
// }
// console.log(checkSquareAndCube([4, 8]))


// 12
// function invertArray(arr) {
//  return arr.map(num => num > 0 ? -num : Math.abs(num));
// }
// console.log(invertArray([1, -2, 3, -4, 5])); 

// 12 v2
// function invertArray(arr) 
// {
//  let result = [];
//  for (let i = 0; i < arr.length; i++) 
//   {
//    if (arr[i] > 0) result.push(-arr[i]); 
//    else result.push(Math.abs(arr[i]));
//  }
//  return result;
// }
// console.log(invertArray([1, -2, 3, -4, 5]))


// 13
// function getMultipliedArr(arr)
// {
//  return arr.map(num => num * 2); 
// }
// console.log(getMultipliedArr([2, 5, 3]));

// 13 v2
// function getMultipliedArr(arr) 
// {
//  let res = [];
//  for (let i = 0; i < arr.length; i++) res.push(arr[i] * 2); 
//  return res;
// }
// console.log(getMultipliedArr([2, 5, 3])); 


// 14
// function sumElementsGreaterThanFive(arr) 
// {
//  let sum = 0;
//  for (let i = 0; i < arr.length; i++) if (arr[i] > 5) sum += arr[i];
//  return sum;
// }
// console.log(sumElementsGreaterThanFive([1, 5, 20, 30, 4, 9, 18])); 


// 15
// function filterArray(arr) 
// {
//  return arr.filter(item => Number.isInteger(item))
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4])); 

// 15 v2
// function filterArray(arr) 
// {
//  let result = [];
//  for (let i = 0; i < arr.length; i++) 
//   {
//    if (typeof arr[i] == 'number') result.push(arr[i]);
//  }
//  return result;
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4]));
