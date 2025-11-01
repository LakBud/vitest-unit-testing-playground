The describe() function is used to group related test cases together.
It helps organize tests into logical blocks, making the test output more readable and structured.

## describe("Description", (params) => {function});

--

Both test() and it() are used to define individual test cases.
They work the same way, and we can use either one to write a test.

it("description", (params) => {
expect(value).toBe(expected_result)
});

description can include %d which shows the input which is tested on in the Vitest UI

--

it/test.each(input)(function): tests the same but with multiple inputs

it.each([
["input", "answer"], (example)
[],
[],
[],
])("description", (params) => {
expect(params).toBe(?)
});

---

Expect() is an function used to make assertions in our tests.
An assertion is a statement that checks if a value meets a certain conditon.
We use expect to check if the result of a test is what we expect it to be.

expect(value).toBe(expected_result)
