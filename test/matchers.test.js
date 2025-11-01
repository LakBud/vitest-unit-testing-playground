import { it, expect } from "vitest";

//
// 🔹 Equality Matchers
//
it("toBe matcher", () => {
  // Primitive equality
  expect(2 + 3).toBe(5);
  expect(true).toBe(true);
});

it("toEqual matcher", () => {
  // Deep equality for objects and arrays
  expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

it("toStrictEqual matcher", () => {
  // Like toEqual but also checks object types
  expect({ name: "Buddo", age: 22 }).toStrictEqual({ name: "Buddo", age: 22 });
});

it("not matcher", () => {
  // Negates the condition
  expect(5).not.toBe(10);
  expect(false).not.toBeTruthy();
});

//
// 🔹 Truthiness Matchers
//
it("toBeTruthy and toBeFalsy matchers", () => {
  expect("hello").toBeTruthy();
  expect("").toBeFalsy();
  expect(0).toBeFalsy();
  expect(1).toBeTruthy();
});

it("toBeNull and toBeUndefined matchers", () => {
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
});

it("toBeDefined matcher", () => {
  const value = 42;
  expect(value).toBeDefined();
});

//
// 🔹 Number Matchers
//
it("toBeGreaterThan / LessThan / CloseTo", () => {
  expect(10).toBeGreaterThan(5);
  expect(5).toBeLessThan(10);
  expect(0.3 + 0.6).toBeCloseTo(0.9, 5);
});

//
// 🔹 String Matchers
//
it("toMatch matcher (regex/string)", () => {
  expect("Buddo is learning Vitest").toMatch(/Vitest/);
  expect("vitest").toMatch("vitest");
});

//
// 🔹 Array and Iterable Matchers
//
it("toContain matcher", () => {
  expect([1, 2, 3]).toContain(2);
  expect("hello").toContain("ell");
});

it("toHaveLength matcher", () => {
  expect([1, 2, 3]).toHaveLength(3);
  expect("Buddo").toHaveLength(5);
});

//
// 🔹 Object Matchers
//
it("toHaveProperty matcher", () => {
  const obj = { name: "Buddo", info: { age: 22 } };
  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("info.age", 22);
});

//
// 🔹 Error and Exception Matchers
//
it("toThrow matcher", () => {
  const badFn = () => {
    throw new Error("Something went wrong!");
  };
  expect(badFn).toThrow();
  expect(badFn).toThrow("Something went wrong!");
});

//
// 🔹 Function / Mock Matchers (using vi.fn)
//
import { vi } from "vitest";

it("toHaveBeenCalled and toHaveBeenCalledTimes matchers", () => {
  const mockFn = vi.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(1);
});

it("toHaveBeenCalledWith matcher", () => {
  const mockFn = vi.fn();
  mockFn("Buddo", 22);
  expect(mockFn).toHaveBeenCalledWith("Buddo", 22);
});

//
// 🔹 Advanced Object and Type Matchers
//
it("toBeInstanceOf matcher", () => {
  class Person {}
  const buddo = new Person();
  expect(buddo).toBeInstanceOf(Person);
});

it("toBeTypeOf matcher", () => {
  expect(typeof "hello").toBe("string");
  expect(typeof 42).toBe("number");
});

//
// 🔹 Snapshot Matcher (optional but powerful)
//
it("toMatchSnapshot matcher", () => {
  const user = { name: "Buddo", age: 22 };
  expect(user).toMatchSnapshot();
});

//
// 🔹 Miscellaneous
//
it("toBeNaN and toBeInfinity matchers", () => {
  expect(NaN).toBeNaN();
  expect(1 / 0).toBe(Infinity);
});
