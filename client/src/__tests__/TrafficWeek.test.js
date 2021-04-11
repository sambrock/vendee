import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import TrafficWeek from '../components/panels/TrafficWeek'

test('renders without error', () => {
  render(<TrafficWeek />)
})