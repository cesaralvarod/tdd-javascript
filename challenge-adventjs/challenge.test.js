import { describe, it, expect } from 'vitest'
import { canReconfigure } from './challenge'

describe('challenge adventjs 23: canReconfigure tests', () => {
  // Redundante
  /*   it('should be a function', () => {
    expect(typeof canReconfigure).toBe('function')
  }) */

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw if second parameter is missing', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('should throw if second parameter is missing', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('should return a boolean', () => {
    expect(typeof canReconfigure('AAA', 'BBB')).toBe('boolean')
  })

  it('should return false if strings parameters provided have different length', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })

  it('should return false if strings parameters provided have different length even with unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings parameters provided have different unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings parameters have different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
