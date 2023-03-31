import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../fizzbuzz'

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not a number provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw if not a number provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow()
  })

  it("should return 'fizz' if number provided is 3", () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it("should return 'fizz' if number provided is multiple of 3", () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
    expect(fizzbuzz(18)).toBe('fizz')
  })

  it("should return 'buzz' if number provided is 5", () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it("should return 'buzz' if number provided is multiple of 5", () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })

  it("should return 'fizzbuzz' if number provided is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })
})
