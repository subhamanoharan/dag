import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextInputField } from './textInputField'

test('displays text and call onChange on update', async () => {
  const onChange = jest.fn()

  render(<TextInputField data={{title: 'Some title'}} field='title' onChange={onChange} />)

  fireEvent.change(screen.getByDisplayValue('Some title'),
    { target: { value: 'Bigger title' } })

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith('title', 'Bigger title')
})
