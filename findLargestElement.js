/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Initialize a variable to store the largest element
    let largest = numbers[0]; // Assume the first element is the largest
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {
        // Compare the current element with the largest element found so far
        if (numbers[i] > largest) {
            // If the current element is larger, update the largest element
            largest = numbers[i];
        }
    }
    
    // Return the largest element found
    return largest;
}

module.exports = findLargestElement;
