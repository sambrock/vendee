import '@testing-library/jest-dom'

import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PriceInput from '../components/PriceInput'

it('input renders', () => {
  const { queryByTitle } = render(<PriceInput />);
  const input = queryByTitle('priceInput');

  expect(input).toBeTruthy();
});

it('input value not undefined', () => {
  const { queryByTitle } = render(<PriceInput />);
  const input = queryByTitle('priceInput');

  expect(input.value).toBeDefined();
})

describe('price inputs updates', () => {
  it("onChange", () => {
    const { queryByTitle } = render(<PriceInput />);
    const input = queryByTitle('priceInput');

    fireEvent.change(input, { target: { value: '1.20' } });

    expect(input.value).toBe('1.20')
  })
})


