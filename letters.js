
/**
 * Calculates the total score of a word based on the position of each letter in the alphabet
 * @param {String} input The string to be scored
 * @returns {Number} The numerical score of the evaluated word
*/
function scoreWord(input){
    let score = 0;
    const letters = [..."abcdefghijklmnopqrstuvwxyz"];
    
    [...input.trim().toLowerCase()].forEach(letter => {
        if (letters.includes(letter)){
            score += letters.indexOf(letter) + 1;
        }
        else if (letter == "ñ"){
            score += letters.indexOf("n") + 1;
        }
    })
    return score
}

// testing
console.log("Score of 'Hello, World!': ", scoreWord("Hello, World!"))
