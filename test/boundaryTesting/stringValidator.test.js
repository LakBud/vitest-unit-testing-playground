import { expect } from "vitest";
import { describe, it } from "vitest";
import { isValidStringLength } from "../../src/boundaryTesting/stringValidator";

describe("isValidStringLength function", () => {
  it.each([
    ["Hello", "String is valid!"],
    ["World!", "String is valid!"],
    ["Too long str", "String length must be between 5 and 10 characters"],
    ["Perfect", "String is valid!"],
    ["Short", "String is valid!"],
  ])("should return correct validation message for string: %s", (str, expected) => {
    if (expected === "String is valid!") {
      expect(isValidStringLength(str)).toBe(expected);
    } else {
      expect(() => isValidStringLength(str)).toThrow(expected);
    }
  });
});
