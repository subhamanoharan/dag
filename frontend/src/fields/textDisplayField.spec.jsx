import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextDisplayField } from './textDisplayField'

test('displays data', async () => {
  render(<TextDisplayField data="greeting" />)

  expect(screen.getByText('greeting')).toBeTruthy()
})
