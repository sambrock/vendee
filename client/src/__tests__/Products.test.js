import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import Products from '../pages/Products'

test('renders without error', () => {
  render(<Products />)
})
