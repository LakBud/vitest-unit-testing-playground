import { it } from "vitest";
import { describe } from "vitest";
import { validatePassword } from "../../src/boundaryTesting/validatePassword";
import { expect } from "vitest";

describe("validatePassword", () => {
  it("should allow a password with exactly 8 characters", () => {
    const result = validatePassword("abcdefgh");
    expect(result).toBe("Password is Valid");
  });

  it("should throw an error if password has less then 8 characters", () => {
    expect(() => validatePassword("abc")).toThrow("Password must be between 8 and 16 characters");
  });

  it("should allow a password with exactly 16 characters", () => {
    const result = validatePassword("abcdefghiklmnop");
    expect(result).toBe("Password is Valid");
  });

  it("should throw an error if password has more then 16 characters", () => {
    expect(() => validatePassword("abcdefghiklmnopqr")).toThrow("Password must be between 8 and 16 characters");
  });
});
