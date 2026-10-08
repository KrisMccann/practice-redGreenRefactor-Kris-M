// RED

// Test is written first.
// It should fail because the add function has not been created yet.

test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
});


// GREEN

// Create the function needed to make the test pass.

function add(a, b) {
    return a + b;
}


// REFACTOR

// The function can be rewritten in a shorter way
// while still giving us the same result.

const addNumbers = (a, b) => a + b;

test("adds two numbers after refactoring", () => {
    expect(addNumbers(2, 3)).toBe(5);
});