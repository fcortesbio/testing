/**
 * 🧠 Challenge: FizzBuzz Twist
 * Write a program that prints the numbers from 1 to 50.
 * But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz".
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz".
 * Twist: For every number that is a prime, print "Prime" instead of the number (unless it’s already replaced by Fizz, Buzz, or FizzBuzz).
 */

/**
 * Checks if a given number is prime.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {number} n The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 *
 * @example
 * isPrime(2); // returns true
 * isPrime(4); // returns false
 * isPrime(17); // returns true
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
 *
 * @example
 * fizzBuzz(3); // returns "Fizz"
 * fizzBuzz(5); // returns "Buzz"
 * fizzBuzz(15); // returns "FizzBuzz"
 * fizzBuzz(7); // returns "Prime"
 * fizzBuzz(8); // returns 8
 */
function fizzBuzz(i) {
  if (i % 15 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else if (isPrime(i)) {
    return "Prime";
  } else {
    return i;
  }
}

/**
 * Executes the FizzBuzz function for a range of numbers and logs the results.
 * It iterates from a specified start value to an end value (inclusive),
 * applies the fizzBuzz function to each number, and logs the number and its
 * corresponding FizzBuzz/Prime output to the console.
 *
 * @param {number} start The starting number of the range (inclusive).
 * @param {number} end The ending number of the range (inclusive).
 * @param {number} [step=1] The increment between numbers in the range. Defaults to 1.
 * @returns {void} This function does not return a value; it logs output to the console.
 *
 * @example
 * main(1, 5); // Logs the following to the console:
 * // i= 1  :  1
 * // i= 2  :  Prime
 * // i= 3  :  Fizz
 * // i= 4  :  4
 * // i= 5  :  Buzz
 */
function main(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    console.log("i=", i, " : ", fizzBuzz(i));
  }
}

main(1, 50);
