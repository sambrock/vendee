import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import TrafficHighest from '../components/panels/TrafficHighest'

test('renders without error', () => {
  render(<TrafficHighest />)
})
