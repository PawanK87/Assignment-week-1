/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Define an array of vowels (both uppercase and lowercase)
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    // Initialize a variable to count the number of vowels
    let count = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            // If it is, increment the count
            count++;
        }
    }
    
    // Return the total count of vowels
    return count;
}

module.exports = countVowels; 
