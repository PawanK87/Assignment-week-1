/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
//step 1: Remove an y characters that are not letters or numbers and convert the strings to lowercase
const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//step 2: Check if the lengths of the cleaned strings are different
if (cleanStr1.length !== cleanStr2.length)
//if the lengths are different, the strings cannot be anagrams, so return false
return false;
}
// Step 3: Sort the characters of each cleaned string
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    
    // Step 4: Compare the sorted strings
    // If they are equal, the strings are anagrams, so return true; otherwise, return false
    return sortedStr1 === sortedStr2;
}

// Export the isAnagram function to make it available for use in other modules
module.exports = isAnagram;

