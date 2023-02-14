import { render, screen } from '@testing-library/react'
import MediaCard from 'components/MediaCard'

const media = {
  imageUrl: 'http://images.com/test.png',
  title: 'Test Media',
  details: 'Details',
  overview: 'Description of the media',
}

test('renders media card', () => {
  render(
    <MediaCard
      imageUrl={media.imageUrl}
      title={media.title}
      details={media.details}
      overview={media.overview}
    />
  )

  const image = screen.getByAltText(media.title)
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', media.imageUrl)

  expect(screen.getByText(media.title)).toBeInTheDocument()
  expect(screen.getByText(media.details)).toBeInTheDocument()
  expect(screen.getByText(media.overview)).toBeInTheDocument()
})
