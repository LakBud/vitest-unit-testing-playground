import { expect } from "vitest";
import { capitalize, capitalizeWords, isPalindrome, reverse, toLowerCase, toUpperCase } from "../../src/elements/stringUtils";
import { describe } from "vitest";
import { it } from "vitest";

describe("String Utilities", () => {
  it("should return string in uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
    expect(toUpperCase("word")).toBe("WORD");
  });

  it("should return string in lowercase", () => {
    expect(toLowerCase("HELLO")).toBe("hello");
    expect(toLowerCase("HEY")).toBe("hey");
  });

  it("should capitalize first letter of string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("yooo")).toBe("Yooo");
  });

  it("should return string reverse", () => {
    expect(reverse("Hiio")).toBe("oiiH");
  });

  it("should capitalize words", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("should check for palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});
