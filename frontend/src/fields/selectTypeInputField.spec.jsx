import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { SelectTypeInputField } from './SelectTypeInputField'

test('displays dropdown with Text as default', async () => {
  const onChange = jest.fn()

  render(<SelectTypeInputField field='price' onChange={onChange} />)

  expect(screen.getByDisplayValue("Text")).toBeTruthy()
})

test('displays dropdown with passed data', async () => {
  const onChange = jest.fn()

  render(<SelectTypeInputField data={{price: 'File'}} field='price' onChange={onChange} />)

  expect(screen.getByDisplayValue("File")).toBeTruthy()
  expect(screen.queryByDisplayValue("Text")).toBeFalsy()
})

test('call onChange when dropdown is switched', async () => {
  const onChange = jest.fn()

  render(
    <SelectTypeInputField
      data={{price: 'File'}}
      field='price'
      onChange={onChange}
    />
  )
  await userEvent.selectOptions(screen.getByRole('combobox'), ['Text'])

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith('price', 'Text')
})
