/**
 * 🧠 Challenge: Letter Score Counter
 * Write a function that calculates the total score of a word based on this rule:
 * Each letter has a value equal to its position in the alphabet:
 * A/a = 1, B/b = 2, ..., Z/z = 26
 *
 * Your function should:
 * - Take a string as input.
 * - Ignore non-letter characters (e.g., punctuation, numbers).
 * - Be case-insensitive.
 * - Return the total score of all valid letters.
 */

/**
 * Calculates the total score of a word based on the position of each letter in the alphabet.
 * Non-alphabetic characters are ignored. The letter 'ñ' is treated as 'n'.
 *
 * @param {string} input The string to be scored.
 * @returns {number} The numerical score of the evaluated word.
 *
 * @example
 * // Example 1: Basic word scoring
 * const word1 = "hello";
 * const score1 = scoreWord(word1);
 * console.log(`Score of "${word1}": ${score1}`); // Output: Score of "hello": 52
 *
 * @example
 * // Example 2: Word with mixed case and punctuation
 * const word2 = "Hello, World!";
 * const score2 = scoreWord(word2);
 * console.log(`Score of "${word2}": ${score2}`); // Output: Score of "Hello, World!": 86
 *
 * @example
 * // Example 3: Word with non-English characters
 * const word3 = "mañana";
 * const score3 = scoreWord(word3);
 * console.log(`Score of "${word3}": ${score3}`); // Output: Score of "mañana": 41
 *
 * @example
 * // Example 4: Empty string
 * const word4 = "";
 * const score4 = scoreWord(word4);
 * console.log(`Score of "${word4}": ${score4}`); // Output: Score of "": 0
 */
function scoreWord(input) {
    let score = 0;
    const letters = [..."abcdefghijklmnopqrstuvwxyz"];

    [...input.trim().toLowerCase()].forEach(letter => {
        if (letters.includes(letter)) {
            score += letters.indexOf(letter) + 1;
        }
        else if (letter === "ñ") {
            score += letters.indexOf("n") + 1;
        }
    })
    return score
}

console.log("Score of 'Hello, World!': ", scoreWord("Hello, World!"))
