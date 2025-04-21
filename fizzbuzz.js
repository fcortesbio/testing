/**
 * Checks if a given number is prime.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {number} n The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(n) {
  if (n < 2) return false;
  let top = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= top; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Applies the FizzBuzz logic with an added "Prime" case.
 * - If the number is divisible by both 3 and 5, it returns "FizzBuzz".
 * - If the number is divisible by 3, it returns "Fizz".
 * - If the number is divisible by 5, it returns "Buzz".
 * - If the number is a prime number (as determined by the isPrime function), it returns "Prime".
 * - Otherwise, it returns the original number.
 *
 * @param {number} i The number to evaluate.
 * @returns {string|number} The FizzBuzz/Prime string or the original number.
 */
function fizzBuzz(i){
    switch (true){
        case i % 15 === 0: return "FizzBuzz";
        case i % 3 === 0: return "Fizz";
        case i % 5 === 0: return "Buzz";
        case isPrime(i): return "Prime";
        default: return i;
    }
}

/**
 * Executes the FizzBuzz function for a range of numbers.
 * It iterates from a specified start value to an end value, with an optional step,
 * and logs the current number and its FizzBuzz/Prime result to the console.
 *
 * @param {number} start The starting number of the range (inclusive).
 * @param {number} end The ending number of the range (inclusive).
 * @param {number} [steps=1] The increment between numbers in the range. Defaults to 1.
 * @returns {void} This function does not return a value; it logs output to the console.
 */
function main(start, end, steps = 1){
    for (let i = start; i <= end; i += steps){
        console.log("i=", i," : ", fizzBuzz(i));
    }
}

main(1, 30)