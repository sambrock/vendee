import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import TrafficHours from '../components/panels/TrafficHours'

test('renders without error', () => {
  render(<TrafficHours />)
})