javascript
# console.log(str.replace("Hello", "Hi")); // "Hi"
split(delimiter): Splits a string into an array of substrings based on a specified delimiter.

javascript
# console.log(str.indexOf("l")); // 2
replace(searchValue, newValue): Replaces a specified value with another value in a string.

javascript
# console.log(str.split("e")); // ["H", "llo"]
toLowerCase(): Converts a string to lowercase.

javascript
# console.log(str.toLowerCase()); // "hello"
toUpperCase(): Converts a string to uppercase.

javascript
 # console.log(str.toUpperCase()); // "HELLO"
2. Array Methods
Array methods are used to manipulate arrays.

push(element): Adds one or more elements to the end of an array and returns the new length.

javascript
# let arr = [1, 2];
# arr.push(3); // [1, 2, 3]
pop(): Removes the last element from an array and returns that element.

javascript
# arr.pop(); // 3, arr is now [1, 2]
shift(): Removes the first element from an array and returns that element.

javascript
# arr.shift(); // 1, arr is now [2]
unshift(element): Adds one or more elements to the beginning of an array and returns the new length.

javascript
# arr.unshift(0); // [0, 2]
slice(start, end): Returns a shallow copy of a portion of an array into a new array object.

javascript
# arr.slice(0, 1); // [0]
splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

javascript
# arr.splice(1, 1, 5); // arr is now [0, 5]
forEach(callback): Executes a provided function once for each array element.

javascript
# arr.forEach(num => console.log(num)); // logs 0, 5
# map(callback): Creates a new array populated with the results of calling a provided function on every element in the calling array.

javascript
# let doubled = arr.map(num => num * 2); // [0, 10]
filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.

javascript
# let filtered = arr.filter(num => num > 0); // [5]
3. Object Methods
Object methods are used to manipulate objects.

Object.keys(obj): Returns an array of a given object's property names.

javascript
# let obj = { name: "Alice", age: 25 };
# console.log(Object.keys(obj)); // ["name", "age"]
Object.values(obj): Returns an array of a given object's property values.

javascript
# console.log(Object.values(obj)); // ["Alice", 25]
Object.entries(obj): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

javascript
# console.log(Object.entries(obj)); // [["name", "Alice"], ["age", 25]]
Object.assign(target, ...sources): Copies all enumerable own properties from one or more source objects to a target object.

javascript
let target = {};
# Object.assign(target, obj); // target is now { name: "Alice", age: 25 }
4. Math Methods
Math methods are used for mathematical calculations.

Math.abs(x): Returns the absolute value of a number.

javascript
# console.log(Math.abs(-5)); // 5
Math.max(...numbers): Returns the largest of the given numbers.

javascript
# console.log(Math.max(1, 2, 3)); // 3
Math.min(...numbers): Returns the smallest of the given numbers.

javascript
# console.log(Math.min(1, 2, 3)); // 1
Math.random(): Returns a floating-point, pseudo-random number in the range from 0 (inclusive) to 1 (exclusive).

javascript
# console.log(Math.random()); // e.g., 0.123456789
Math.round(x): Rounds a number to the nearest integer.

javascript
# console.log(Math.round(4.5)); // 5
5. Promise Methods
Promise methods are used to handle asynchronous operations.