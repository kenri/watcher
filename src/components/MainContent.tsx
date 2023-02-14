import MediaCard from 'components/MediaCard'
import MenuButton from 'components/MenuButton'
import Title from 'components/Title'
import { AboveBreakpoint, BelowBreakpoint } from 'foundation'
import useAppContext from 'hooks/useAppContext'
import useGenres from 'hooks/useGenres'
import useMovies from 'hooks/useMovies'
import useTvShows from 'hooks/useTvShows'
import { useRef } from 'react'
import styled, { css } from 'styled-components'

const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

export default function MainContent() {
  const { mediaType, isMenuOpen } = useAppContext()
  const movies = useMovies()
  const tvShows = useTvShows()
  const genres = useGenres()
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <Container isMenuOpen={isMenuOpen} ref={ref}>
      <TitleRow>
        {isMenuOpen ? null : <MenuButton />}

        <Title>
          Most popular {mediaType === 'movies' ? 'Movies' : 'TV Shows'}
        </Title>
      </TitleRow>
      <MediaContainer>
        {mediaType === 'movies'
          ? movies.map(media => (
              <MediaCard
                key={media.id}
                imageUrl={`${IMG_URL}${media.poster_path}`}
                title={media.title}
                details={[
                  new Date(media.release_date).getFullYear(),
                  media.genre_ids
                    .map(id => genres.find(x => x.id === id)?.name)
                    .filter(x => x)
                    .join(', '),
                  media.vote_average,
                ].join(' • ')}
                overview={media.overview}
              />
            ))
          : tvShows.map(media => (
              <MediaCard
                key={media.id}
                imageUrl={`${IMG_URL}${media.poster_path}`}
                title={media.name}
                details={[
                  new Date(media.first_air_date).getFullYear(),
                  media.genre_ids
                    .map(id => genres.find(x => x.id === id)?.name)
                    .filter(x => x)
                    .join(', '),
                  media.vote_average,
                ].join(' • ')}
                overview={media.overview}
              />
            ))}
      </MediaContainer>
    </Container>
  )
}

const Container = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex: 1;
  padding: 24px;
  flex-direction: column;
  ${props =>
    props.isMenuOpen
      ? css`
          transform: translateX(240px);
          transition: transform 300ms ease-out;
        `
      : css`
          transform: translateX(0);
          transition: transform 300ms ease-out;
        `}

  ${BelowBreakpoint.md} {
    padding: 16px;
  }
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 16px;
  align-items: center;
`

const MediaContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  ${AboveBreakpoint.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${AboveBreakpoint.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${AboveBreakpoint.xxl} {
    grid-template-columns: repeat(6, 1fr);
  }
`
