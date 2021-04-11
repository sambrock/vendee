import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import DiscountList from '../components/panels/DiscountList'

test('renders without error', () => {
  render(<DiscountList />)
})