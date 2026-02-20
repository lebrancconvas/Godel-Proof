import { describe, test, expect } from "bun:test";
import { isPrimeNumber, createPrimeArray } from "../utils/prime";

describe("Test isPrimeNumber();", () => {
  test("2 is a Prime Number.", () => {
    expect(isPrimeNumber(2)).toBe(true);
  });

  test("3 is a Prime Number.", () => {
    expect(isPrimeNumber(3)).toBe(true);
  })

  test("6 is not a Prime Number.", () => {
    expect(isPrimeNumber(6)).toBe(false);
  })
});

describe("Test Creating Array of Prime Number.", () => {
  test("10 -> [2, 3, 5, 7]", () => {
    expect(createPrimeArray(10)).toBeArray();
    expect(createPrimeArray(10)).toEqual([2, 3, 5, 7]);
  });

  test("12 -> [2, 3, 5, 7, 11]", () => {
    expect(createPrimeArray(12)).toBeArray();
    expect(createPrimeArray(12)).toEqual([2, 3, 5, 7, 11]);
  })

}); 