import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'
import Traffic from '../pages/Traffic'

test('renders without error', () => {
  render(<Traffic />)
})