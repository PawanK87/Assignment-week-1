/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Convert the input string to lowercase for case-insensitive comparison
    str = str.toLowerCase();
    
    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = str.length - 1;
    
    // Iterate over the string until the start pointer is less than the end pointer
    while (start < end) {
        // If characters at start and end pointers don't match, return false
        if (str[start] !== str[end]) {
            return false;
        }
        
        // Move the pointers towards the center of the string
        start++;
        end--;
    }
    
    // If the loop completes without returning false, the string is a palindrome
    return true;
}
