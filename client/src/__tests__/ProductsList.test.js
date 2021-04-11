import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import ProductsList from '../components/panels/ProductsList'

test('renders without error', () => {
  render(<ProductsList />)
})
