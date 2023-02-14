import { render, screen } from '@testing-library/react'
import Divider from 'components/Divider'

test('renders learn react link', () => {
  render(<Divider />)
  expect(screen.getByRole('divider')).toBeInTheDocument()
})
