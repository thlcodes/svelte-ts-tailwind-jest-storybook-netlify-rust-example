import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Button from './Button.svelte'

test('fallback text', () => {
  const { getByText } = render(Button)

  expect(getByText('button')).toBeInTheDocument()
})

test('text', () => {
  const { getByText } = render(Button, { name: "Peter" })

  expect(getByText('peter')).toBeInTheDocument()
})