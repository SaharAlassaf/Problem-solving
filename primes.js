function primes(start, end) {
    
  if (n == 1) {
    return false;
  }

  let i = 2;
  while (i * i <= n) {
    if (n % i == 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

primes(1, 10);
console.log(primes(1, 10));
