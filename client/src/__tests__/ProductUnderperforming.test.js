import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import ProductUnderperforming from '../components/panels/ProductUnderperforming'

test('renders without error', () => {
  render(<ProductUnderperforming />)
})
