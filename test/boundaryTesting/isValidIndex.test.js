import { expect } from "vitest";
import { it } from "vitest";
import { describe } from "vitest";
import { isValidIndex } from "../../src/boundaryTesting/isValidIndex";

describe("isValidIndex", () => {
  const arr = [10, 20, 30, 40, 50];

  it("should allow index 0 (first element)", () => {
    const result = isValidIndex(arr, 0);
    expect(result).toBe("Index is valid!");
  });

  it("should throw an error for index -1 (out of bounds)", () => {
    expect(() => isValidIndex(arr, -1)).toThrowError("Index out of bounds");
  });

  it("should allow index 4 (last element)", () => {
    const result = isValidIndex(arr, 4);
    expect(result).toBe("Index is valid!");
  });

  it("should throw an error for index 5 (out of bounds)", () => {
    expect(() => isValidIndex(arr, 5)).toThrowError("Index out of bounds");
  });
});
