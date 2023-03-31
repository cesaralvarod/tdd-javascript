import { useState } from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

const operations = ['+', '-', '*', '/']

const equalSign = '='

const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = op => () => setValue(value.concat(op))

  return (
    <>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role="grid">
        {rows.map((row, idx) => (
          <div role="row" key={idx}>
            {row.map(number => (
              <button onClick={createHandleClick(number)} key={number}>
                {number}
              </button>
            ))}
          </div>
        ))}

        {operations.map(operation => (
          <button onClick={createHandleClick(operation)} key={operation}>
            {operation}
          </button>
        ))}

        <span>{equalSign}</span>
      </div>
    </>
  )
}

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
    fireEvent.click(one)

    const input = screen.getByRole('textbox')

    expect(input.value).toBe('1')
  })

  it('should user input after several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')

    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(one)

    const input = screen.getByRole('textbox')

    expect(input.value).toBe('1+1')
  })
})
