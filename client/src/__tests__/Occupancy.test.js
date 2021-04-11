import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import Occupancy from '../components/panels/Occupancy'

test('renders without error', () => {
  render(<Occupancy />)
})

// check if change red