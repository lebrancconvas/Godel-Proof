export function isPrimeNumber(num: number): boolean {
  if(num <= 1) return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }

  return true;
};

export function createPrimeArray(maxRange: number): number[] {
  let primeArr: number[] = [];

  for(let i = 2; i <= maxRange; i++) {
    if(isPrimeNumber(i)) {
      primeArr.push(i);
    }
  }

  return primeArr;
};

