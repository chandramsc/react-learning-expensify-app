const add = (a, b) => a + b;
const generateGreeting = (name = 'Chandrasekar') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    
    //old code
    /*if (result !== 7) {
        throw new Error(`you added 3 and 4. The result was ${result}. Expect 7`);
    }*/ 

    //new code
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Chandra');
    expect(result).toBe(`Hello Chandra!`);
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe(`Hello Chandrasekar!`)
})