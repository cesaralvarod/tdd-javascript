import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'
import { Calculator, numbers, operations, equalSign } from './Calculator'

describe('calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title conrrectly', () => {
    render(<Calculator />)

    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should render four rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')

    expect(rows.length).toBe(4)
  })

  it('should render operations', () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)

    screen.getByText(equalSign)
  })

  it('should render an input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const input = screen.getByRole('textbox')

    fireEvent.click(one)

    expect(input.value).toBe('1')
  })

  it('should user input after several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const three = screen.getByText('3')
    const input = screen.getByRole('textbox')

    fireEvent.click(one)
    fireEvent.click(two)
    fireEvent.click(three)

    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')

    const plus = screen.getByText('+')
    const input = screen.getByRole('textbox')

    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(one)

    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input and show the calculator', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const plus = screen.getByText('+')
    const equal = screen.getByText(equalSign)
    const input = screen.getByRole('textbox')

    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(one)
    fireEvent.click(equal)

    expect(input.value).toBe('2')
  })

  it('should do two calculations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const plus = screen.getByText('+')
    const equal = screen.getByText(equalSign)
    const input = screen.getByRole('textbox')

    // 1+1
    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(one)
    fireEvent.click(equal)

    // 2+1
    fireEvent.click(plus)
    fireEvent.click(one)
    fireEvent.click(equal)

    expect(input.value).toBe('3')
  })
})
