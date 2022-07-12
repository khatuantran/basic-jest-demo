const divide = require('../caculator/divide.js')

describe('Test suit for divide', () => {
    
    // 5 + 7
    test('Should be return 2', () => {
        expect(divide(6,3)).toBe(2)
    })

    // test('Should be return undefined', () => {
    //     expect(divide(10)).toBeUndefined()
    // })


    // test('Should be return value must be number', () => {
    //     expect(divide(5, 'seven')).toBe('Value must be a number')
    // })

    // test('Should be return divide by zero', () => {
    //     expect(divide(10, 0)).toBe('Divide by zero')
    // })
})