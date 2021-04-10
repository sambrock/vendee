import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import Products from '../pages/Products'
import { getTrendingProducts } from '../components/panels/ProductsTrending'

test('renders without error', () => {
  render(<Products />)
})

test('gets trending products', () => {
  const data = [ { id: 1, interactionsToday: 1 }, { id: 2, interactionsToday: 1 }, { id: 3, interactionsToday: 2 }, { id: 4, interactionsToday: 2 }, { id: 5, interactionsToday: 3 }, { id: 6, interactionsToday: 4 }, { id: 7, interactionsToday: 5 }, { id: 8, interactionsToday: 7 }, ];
  const results = [ { id: 8, interactionsToday: 7 }, { id: 7, interactionsToday: 5 }, { id: 6, interactionsToday: 4 }, { id: 5, interactionsToday: 3 }, { id: 3, interactionsToday: 2 }, ]

  expect(getTrendingProducts(data)).toStrictEqual(results);
})



