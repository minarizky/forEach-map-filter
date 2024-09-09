function removeVowels(str) {
    // Define a string of vowels
    const vowels = 'aeiou';
    // Convert the input string to lowercase
    str = str.toLowerCase();
    // Use filter to remove vowels and join the array back into a string
    return str.split('').filter(char => !vowels.includes(char)).join('');
}

// Test cases
console.log(removeVowels('Elie')); // 'l'
console.log(removeVowels('TIM'));  // 'tm'
console.log(removeVowels('ZZZZZZ')); // 'zzzzzz'
