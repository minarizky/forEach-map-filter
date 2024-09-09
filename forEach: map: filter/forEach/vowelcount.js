function vowelCount(str) {
    // Define the vowels
    const vowels = 'aeiou';
    // Initialize an empty object to store vowel counts
    let count = {};
    
    // Convert the string to lowercase
    str = str.toLowerCase();
    
    // Iterate over each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If the vowel is not already in the object, add it with a count of 1
            // Otherwise, increment the existing count
            count[char] = (count[char] || 0) + 1;
        }
    }
    
    return count;
}

// Test cases
console.log(vowelCount('Elie')); // {e: 2, i: 1}
console.log(vowelCount('Tim')); // {i: 1}
console.log(vowelCount('Matt')); // {a: 1}
console.log(vowelCount('hmmm')); // {}
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1}
