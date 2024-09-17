import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { BooleanField } from './booleanField'

test('displays checkbox as not checked by default and calls onChange with true on toggle', async () => {
  const onChange = jest.fn()

  render(<BooleanField field='price' onChange={onChange} />)

  await userEvent.click(screen.getByRole('checkbox'))

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith('price', true)
})

test('displays checkbox as checked and calls onChange with false on toggle', async () => {
  const onChange = jest.fn()

  render(<BooleanField data={{price: true}} field='price' onChange={onChange} />)

  await userEvent.click(screen.getByRole('checkbox'))

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith('price', false)
})
