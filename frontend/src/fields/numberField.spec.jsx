import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { NumberField } from './numberField'

test('displays number and call onChange on update', async () => {
  const onChange = jest.fn()

  render(<NumberField data={{price: 1}} field='price' onChange={onChange} />)

  fireEvent.change(screen.getByDisplayValue(1), { target: { value: 123 } })

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith('price', '123')
})
