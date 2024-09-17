import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { DynamicTextInputField } from './dynamicTextInputField'

test('displays text and calls onChange with new text', async () => {
  const onChange = jest.fn()
  const onHandlesUpdate = jest.fn()

  render(
    <DynamicTextInputField
      data={{title: 'some'}}
      field='title'
      onChange={onChange}
      onHandlesUpdate={onHandlesUpdate}
    />)

  await userEvent.type(screen.getByRole('textbox'), 'thing')

  expect(onChange).toHaveBeenCalledTimes('thing'.length)
  expect(onHandlesUpdate).toHaveBeenCalledWith([])
})

test('displays text and calls onChange, onHandlesUpdate with new handles', async () => {
  const onChange = jest.fn()
  const onHandlesUpdate = jest.fn()

  render(
    <DynamicTextInputField
      data={{title: '{{some}} ghee {{blue}}'}}
      field='title'
      onChange={onChange}
      onHandlesUpdate={onHandlesUpdate}
    />)

  await userEvent.type(screen.getByRole('textbox'), 'thing')

  expect(onChange).toHaveBeenCalledTimes('thing'.length)
  expect(onHandlesUpdate).toHaveBeenCalledWith(['some', 'blue'])
})
