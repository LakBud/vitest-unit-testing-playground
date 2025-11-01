import { it } from "vitest";
import { describe } from "vitest";
import { flattenArray, intersectArrays, removeDuplicates } from "../../src/arrayUtils";
import { expect } from "vitest";

describe("Array Utils", () => {
  it("should flatten a nested array", () => {
    expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should find intersection of an array", () => {
    expect(intersectArrays([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  it("should remove duplicates in array", () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
