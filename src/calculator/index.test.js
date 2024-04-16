import { sum, minus } from './index'

describe('sum', () => {
    it('adds two numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

describe('minus', () => {
    it('adds two numbers', () => {
        expect(minus(1, 1)).toBe(0)
    })
})
