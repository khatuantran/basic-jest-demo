const multiply = require('../caculator/multiply.js')

describe('Test suit for multiply', () => {
    
    test('Should be return sum of 5 and 7', () => {
        expect(multiply(5,7)).toBe(35)
    })

    // test('Should be return undefined', () => {
    //     expect(multiply(10)).toBeUndefined()
    // })

    // test('Should be return value must be number', () => {
    //     expect(multiply(5, 'seven')).toBe('Value must be a number')
    // })

})