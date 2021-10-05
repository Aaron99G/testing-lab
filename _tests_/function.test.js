const { returnTwo, greeting, add, subtract, multiply, divide } = require('../function');

test('Should return 2', () => {
    expect(returnTwo()).toBe(2);
})

test('Will return a greeting with name', () => {
    expect(greeting('James')).toEqual('Hello, James');
})

test('Will return a greeting with name', () => {
    expect(greeting('Jill')).toEqual('Hello, Jill');
})


// test('Will return sum of 2 nums', () => {
//     expect(add(1, 2)).toBe(3);
// })

// test('Will return sum of 2 nums', () => {
//     expect(add(5, 9)).toBe(14);
// })

// test('Will subtract num2 from num1', () => {
//     expect(subtract(100, 50)).toBe(50);
// })

// test('Will divide num1 by num2', () => {
//     expect(divide(50, 10)).toBe(5);
// })

// test('Will multiply num1 by num2', () => {
//     expect(multiply(7, 7)).toBe(49);
// })

//Describe
describe('Math Functions', () => {
    test('Will return sum of 2 nums', () => {
        expect(add(1, 2)).toBe(3);
    })

    test('Will return sum of 2 nums', () => {
        expect(add(5, 9)).toBe(14);
    })

    test('Will subtract num2 from num1', () => {
        expect(subtract(100, 50)).toBe(50);
    })

    test('Will divide num1 by num2', () => {
        expect(divide(50, 10)).toBe(5);
    })

    test('Will multiply num1 by num2', () => {
        expect(multiply(7, 7)).toBe(49);
    })
})