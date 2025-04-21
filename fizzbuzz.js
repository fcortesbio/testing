function isPrime(n) {
  if (n < 2) return false;
  let top = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= top; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
/**
 * 
 * @param {*} i
 * @return {*} 
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

function main(start, end, steps = 1){
    for (let i = start; i <= end; i += steps){
        console.log("i=", i," : ", fizzBuzz(i));
    }
}

main(1, 30)