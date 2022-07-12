const sum = require('../caculator/sum.js')

describe('Test suit for sum', () => {    
    // 5 + 7
    test('Should be return sum of 5 and 7', () => {
        expect(sum(5,7)).toBe(12)
    })

    test('Should be return undefined', () => {
        // expect(sum(5,5)).toBeUndefined()
        expect(sum(5, null)).toBeUndefined()
    })


    //  5 + 'seven'
    // test('Should be return value must be number', () => {
    //     expect(sum(5, 'seven')).toBe('Value must be a number')
    // })

})