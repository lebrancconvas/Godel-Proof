import { describe, test, expect } from "bun:test";
import { seperator, encoder } from "../utils/numbering";
import { type Symbolic } from "../data/symbol";

describe("Test Seperate Symbol from Statements.", () => {
  test("0 = 0 -> ['0', '=', '0']", () => {
    expect(seperator("0 = 0")).toBeArray();
    expect(seperator("0 = 0")).toEqual(["0", "=", "0"]);
  })
});

describe("Test Godel Numbering", () => {
  test("0 = 0 -> 15932", () => {
    const seperateStatement = seperator("0 = 0") as Symbolic[];
    expect(encoder(seperateStatement)).toBe(15932);
  });

});