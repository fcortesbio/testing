/**
🧠 Challenge: Letter Score Counter
Write a function that calculates the total score of a word based on this rule:
Each letter has a value equal to its position in the alphabet:
A/a = 1, B/b = 2, ..., Z/z = 26

Your function should:
* Take a string as input.
* Ignore non-letter characters (e.g., punctuation, numbers).
* Be case-insensitive.
* Return the total score of all valid letters.

*/

/**
 * Calculates the total score of a word based on the position of each letter in the alphabet.
 * Non-alphabetic characters are ignored. The letter 'ñ' is treated as 'n'.
 *
 * @param {string} input The string to be scored.
 * @returns {number} The numerical score of the evaluated word.
 */
function scoreWord(input){
    let score = 0;
    const letters = [..."abcdefghijklmnopqrstuvwxyz"];

    [...input.trim().toLowerCase()].forEach(letter => {
        if (letters.includes(letter)){
            score += letters.indexOf(letter) + 1;
        }
        else if (letter === "ñ"){
            score += letters.indexOf("n") + 1;
        }
    })
    return score
}

console.log("Score of 'Hello, World!': ", scoreWord("Hello, World!"))