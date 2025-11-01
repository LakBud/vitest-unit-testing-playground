import { describe, it, test, expect } from "vitest";
import { multiply, subtract, divide, factorial, gcd, fibonacci, add } from "../../src/elements/mathUtils";

describe("Math Utilities", () => {
  it("Should add numbers", () => {
    // Arrange
    const a = 1;
    const b = 1;

    // Act
    const result = a + b;

    // Assert
    expect(result).toBe(2);
  });

  it("should add two numbers with eachother", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should throw an error if argument is string", () => {
    expect(() => add(1, "2")).toThrowError("Both arguments must be numbers");
    expect(() => add("1", "4")).toThrowError("Both arguments must be numbers");
    expect(() => add(1, "0")).toThrowError("Both arguments must be numbers");
  });

  test("Should subract one number from the other", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("Should multiply two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(-2, 3)).toBe(-6);
  });

  it("should divide one number by another", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
  });

  it("should throw new error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });

  it("should throw an error when a negative number is passed", () => {
    expect(() => factorial(-10)).toThrow("Number must be a positive");
  });

  it("should calculate factorials", () => {
    expect(factorial(5)).toBe(120);
    expect(() => factorial(-1)).toThrow("Number must be a positive");
  });

  it("should calculate greated common divisor", () => {
    expect(gcd(56, 98)).toBe(14);
    expect(gcd(101, 10)).toBe(1);
  });

  it("should generate the fibonacci sequence", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(() => fibonacci(-1)).toThrow("Number must be non-negative");
  });
});

describe("Math Utilities - Parameterized Test", () => {
  it.each([
    [2, 3, 6],
    [4, 5, 20],
    [7, 8, 56],
    [1, 0, 0],
  ])("should return correct result when multiplying %d and %d (expected: %d)", (a, b, expectedResult) => {
    expect(multiply(a, b)).toBe(expectedResult);
  });
});
