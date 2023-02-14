import { render, screen } from '@testing-library/react'
import Sidebar from 'components/Sidebar'

test('renders sidebar', () => {
  render(<Sidebar />)

  expect(screen.getByText(/Watcher/i)).toBeInTheDocument()
  expect(screen.getByText(/Movies/i)).toBeInTheDocument()
  expect(screen.getByText(/TV Show/i)).toBeInTheDocument()
  expect(screen.getByText(/Genres/i)).toBeInTheDocument()
  expect(screen.getByText(/All/i)).toBeInTheDocument()
})
