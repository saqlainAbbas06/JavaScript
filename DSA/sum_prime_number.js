function sumPrimes(n) {

  if (!n || n < 2) return 0; 

  let sumPrime = 0;

  function isPrime(num) {
    if (num < 2) return false;
    for (let j = 2; j <= num/2; j++) {
      if (num % j === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sumPrime += i;
    }
  }

  return sumPrime;
}