A.A.A Testing

Arrange: When you gather everything you need for the test.
Act: When you do the action youre testing (like calling a function)
Assert: When you check if the result is what you expected

---

T.D.D Testing

WRITE A TEST -> WRITE CODE -> MAKE THE TEST PASS -> REFACTOR -> REPEAT

---

Positive Testing vs Negative Testing

Positive:

- Checks if the system behaves as expected when provided with valid inputs.
- You are testing the codebase with valid inputs, ensuring the system functions are working.

Negative:

- Checks if the system handles invalid or unexpected inputs correctly.
- You provide incorrect or indavlid inputs to ensrue the system can handle error scenarios that doesnt crash or behave unexpectedly.

---

Boundary Testing

Focuses on testing the edges or boundaries of input values. The primary idea behind boundary testing is that erros are most likely to occur at the boundaries (the extreme ends) of input ranges, rather than in the middle. By testing the boundaries of input values, you can find defects that occur when the system handles these edge cases.

Types of Boundary Testing

Minimum Boundary:
Tests the smallest possible valid value

Maximum Boundary:
Test the largest possible valid value.

Just Inside Boundary
Test just above the minimum or just below the maximum

Just Outside Boundary
Test just below the minimum or just above the maximum (to ensure invalid values are correctly rejected)

---

Parameterized Testing

Parameterized tests allow you to run the same test with multiple sets of inputs without duplicating the test logic. Instead of writing multiple similar test cases for different inputs, you define the inputs as a set of parameters adn the test will automatically run for each combination of values.
