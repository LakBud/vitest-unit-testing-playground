Assertions:

.toBe: checks for strict equaility (===), meaning both values must be the same type and value.

.toThrow: Checks for a Message
.toThrowError: Checks for a Error

.toEqual: Checks for deep equality. It compares the values by checking the content of objects or arrays, not just their reference

.toStrictEqual: Check for deep equality like toEqual, but also consider props like undefined, function and other types that are not strict equal in certain cases.

.toBeTruthy: Checks if it is truthy or falsy
Falsy = false/0/null/""/undefined/NaN | Truthy = everything that isnt Falsy

.toBeGreaterThan: Checks if the value is greater then a set value
.toBeLessThan: Checks if the value is less then a set value
.toBeGreaterThanOrEqual: Checks if the value is greater then or equal a set value
.toBeLessThanOrEqual: Checks if the value is less then or equal a set value

.ToContain: Checks if the result has a specific value

.ToMatch: Checks for a specific regix

.toHaveProperty: Checks if a object/array has a specific property

.toBeDefined: Checks if something is defined
.toBeUndefined: Checks if something is undefined
