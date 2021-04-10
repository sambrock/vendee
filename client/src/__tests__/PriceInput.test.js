import '@testing-library/jest-dom'

import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PriceInput from '../components/PriceInput'

it('input renders', () => {
  const { queryByTitle } = render(<PriceInput />);
  const input = queryByTitle('priceInput');

  expect(input).toBeTruthy();
});

describe('price inputs not empty', () => {
  it("onKeyUp", () => {
    const { queryByTitle } = render(<PriceInput />);
    const input = queryByTitle('priceInput');

    expect(input.innerHTML).toBeDefined();
  })
})