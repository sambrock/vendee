import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import ProductsUnderperforming from '../components/panels/ProductsUnderperforming'

test('renders without error', () => {
  render(<ProductsUnderperforming />)
})