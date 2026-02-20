import { SYMBOL, type Symbolic } from "../data/symbol";
import { createPrimeArray } from "./prime";

export function seperator(statement: string): string[] {
  const symbolics: string[] = statement.split("").filter((symbol: string) => symbol !== " ");  
  return [...symbolics];
};

export function encoder(symbols: Symbolic[]): number | undefined {
  const maxNumber = 99;
  const primes = createPrimeArray(maxNumber);
  let encodeNumber = 0;

  for(let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];

    if(typeof symbol === "undefined") {
      return 0;
    };

    const codeNumber = SYMBOL[symbol];
    const primeIndex = primes[i];

    if(typeof primeIndex === "undefined") {
      return -0;
    };

    encodeNumber += Math.pow(primeIndex, codeNumber);
  }

  return encodeNumber;
};