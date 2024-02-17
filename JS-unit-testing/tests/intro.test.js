import { describe, test, it, expect } from 'vitest'
import { calculateAverage, fizzBuzz, max } from '../src/intro';

describe('max', () => {
    it('should return the first arugment if it is greater', () => {
        // Arrange
        const a = 2;
        const b = 1;

        // Act 
        const result = max(a, b)

        // Assert
        expect(result).toBe(2)

        // expect(max(2, 1)).toBe(2)
    })
    it('should return the second arugment if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })
    it('should return the first arugment if it is equal', () => {
        expect(max(1, 1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    it('should return Buzz if divisible by 3', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })
    it('should return Buzz if divisible by 5', () => {
        expect(fizzBuzz(10000000000000000000000)).toBe('Buzz')
    })
    it('should return FizzBuzz if divisible by 3 and 5', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })
    it('should return a number if it doesnt meet the requirments', () => {
        expect(fizzBuzz(4)).toBe("4")
    })
})

describe('calculateAverage', () => {
    it('should return NaN if array is empty', () => {
        expect(calculateAverage([])).toBe(NaN)
    })
    it('should return the number if the array only has one number', () => {
        expect(calculateAverage([1])).toBe(1)
    })
    it('should return the average if the array has two numbers', () => {
        expect(calculateAverage([1, 2])).toBe(1.5)
    })
    it('should return the average if the array has multiple numbers', () => {
        expect(calculateAverage([1, 2, 2, 1])).toBe(1.5)
    })
})