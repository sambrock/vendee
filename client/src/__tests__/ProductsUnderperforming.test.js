import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import ProductsUnderperforming from '../components/panels/ProductsUnderperforming'
import { getUnderperforming } from '../components/panels/ProductUnderperforming'

test('renders without error', () => {
  render(<ProductsUnderperforming />)
})

test('gets underperforming products', () => {
  const data = [
    { id: 1, interactionsHour: 0 },
    { id: 2, interactionsHour: 12 },
    { id: 3, interactionsHour: 10 },
    { id: 4, interactionsHour: 4 },
    { id: 5, interactionsHour: 2 },
    { id: 6, interactionsHour: 1 },
    { id: 6, interactionsHour: 0 },
  ];

  const results = [
    { id: 1, interactionsHour: 0 },
    { id: 6, interactionsHour: 0 },
    { id: 6, interactionsHour: 1 },
    { id: 5, interactionsHour: 2 },
    { id: 4, interactionsHour: 4 },
  ]

  expect(getUnderperforming(data)).toStrictEqual(results);
});
