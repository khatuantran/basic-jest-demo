const subtract = require('../caculator/subtract.js')

describe('Test suit for subtract', () => {
    
    test('Should be return sum of 5 and 7', () => {
        expect(subtract(5,7)).toBe(-2)
    })

    // test('Should be return undefined', () => {
    //     expect(subtract(10)).toBeUndefined()
    // })

    // test('Should be return value must be number', () => {
    //     expect(subtract(5, 'seven')).toBe('Value must be a number')
    // })

})