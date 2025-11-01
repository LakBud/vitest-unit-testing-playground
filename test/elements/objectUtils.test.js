import { it } from "vitest";
import { describe } from "vitest";
import { deepClone, deepEqual, mergeObjects } from "../../src/elements/objectUtils";
import { expect } from "vitest";

describe("Object Utilities", () => {
  it("should merge two objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };

    const merged = mergeObjects(obj1, obj2);
    expect(merged).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("should deep clone an object", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    cloned.b.c = 3;

    expect(original.b.c).toBe(2);
    expect(cloned.b.c).toBe(3);
  });

  it("should correctly check the equality between two objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    const obj3 = { a: 1, b: { c: 2 } };

    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(true);
  });
});
