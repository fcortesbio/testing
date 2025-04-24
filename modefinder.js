/**
 * 🧠 Challenge: Mode Finder
 * Write a function that finds the mode of a list of numbers.
 *
 * The mode is the number that appears most frequently.
 * If there is a tie for highest frequency, return all modes in a list (or array), sorted in ascending order.
 *
 * If the list is empty, return null.
 *
 * @param {number[]} arr The input array of numbers.
 * @returns {number|number[]|null} The mode(s) of the input array:
 * - A single number if there is only one mode.
 * - An array of numbers, sorted in ascending order, if there are multiple modes.
 * - null if the input array is empty or null.
 *
 * @example
 * // Example 1: Single mode
 * const arr1 = [1, 2, 2, 3, 4];
 * const mode1 = modeFinder(arr1);
 * console.log(mode1); // Output: 2
 *
 * @example
 * // Example 2: Multiple modes
 * const arr2 = [1, 2, 2, 3, 3, 4];
 * const mode2 = modeFinder(arr2);
 * console.log(mode2); // Output: [ 2, 3 ]
 *
 * @example
 * // Example 3: Empty array
 * const arr3 = [];
 * const mode3 = modeFinder(arr3);
 * console.log(mode3); // Output: null
 *
  * @example
 * // Example 4: Array with one element
 * const arr4 = [5];
 * const mode4 = modeFinder(arr4);
 * console.log(mode4); // Output: 5
 */
function modeFinder(arr) {
    if (!arr || arr.length === 0) return null;
    const counts = {};
    let maxFreq = 0;
    let modes = [];

    for (const number of arr) {
        if (isNaN(number)) continue;
        counts[number] = (counts[number] || 0) + 1;

        if (counts[number] > maxFreq) {
            maxFreq = counts[number];
            modes = [number];
        } else if (counts[number] === maxFreq) {
            modes.push(number);
        }
    }

    const uniqueModes = Array.from(new Set(modes)).sort((a,b)=>a-b);
    return uniqueModes.length === 1 ? uniqueModes[0] : uniqueModes;
}

const myList = [1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9, 9, 9, 9, 0]
console.log("Modes: ", modeFinder(myList))
