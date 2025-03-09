// Create a new Node.js module
module.exports = {
  // Define a function that takes in an array of numbers and returns the sum of all elements
  sumAllElements: (arr) => arr.reduce((acc, cur) => acc + cur, 0),

  // Define a function that takes in a string and returns its length
  getStringLength: (str) => str.length,

  // Define a function that takes in two numbers and returns their product
  multiply: (num1, num2) => num1 * num2,

  // Define a function that takes in an array of numbers and returns the largest element
  getLargestElement: (arr) => Math.max(...arr),

  // Define a function that takes in two arrays and returns their intersection
  getIntersection: (arr1, arr2) => [...new Set([...arr1, ...arr2])].filter((x) => arr1.includes(x) && arr2.includes(x)),

  // Define a function that takes in an array of objects and returns their keys as an array
  getObjectKeys: (arr) => Object.keys(arr[0]),

  // Define a function that takes in an object and returns its values as an array
  getValues: (obj) => Object.values(obj),
};
