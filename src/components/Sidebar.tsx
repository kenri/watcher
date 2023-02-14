import Divider from 'components/Divider'
import MenuButton from 'components/MenuButton'
import Title from 'components/Title'
import useAppContext from 'hooks/useAppContext'
import useGenres from 'hooks/useGenres'
import styled, { css } from 'styled-components'

export default function Sidebar() {
  const genres = useGenres()
  const { mediaType, setMediaType, genreId, setGenreId, isMenuOpen } =
    useAppContext()

  const handleMediaTypeClick = (type: 'movies' | 'tv shows') => () => {
    setMediaType(type)
  }

  const handleAllClick = () => {
    setGenreId(undefined)
  }

  const handleItemClick = (id: number) => () => {
    setGenreId(id)
  }

  return (
    <Container isHidden={!isMenuOpen}>
      <BrandRow>
        <Title>Watcher</Title>
        <MenuButton />
      </BrandRow>

      <Divider />

      <List>
        <Item
          onClick={handleMediaTypeClick('movies')}
          selected={mediaType === 'movies'}
        >
          Movies
        </Item>

        <Item
          onClick={handleMediaTypeClick('tv shows')}
          selected={mediaType === 'tv shows'}
        >
          TV Show
        </Item>
      </List>

      <Divider />

      <Section>Genres</Section>

      <List>
        <Item onClick={handleAllClick} selected={genreId === undefined}>
          All
        </Item>

        {genres.map(({ id, name }) => (
          <Item
            key={id}
            onClick={handleItemClick(id)}
            selected={id === genreId}
          >
            {name}
          </Item>
        ))}
      </List>
    </Container>
  )
}

const Container = styled.div<{ isHidden: boolean }>`
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #2e2e30;
  position: fixed;
  z-index: 1;

  ${props =>
    props.isHidden
      ? css`
          transform: translateX(-240px);
          transition: transform 300ms ease-out;
        `
      : css`
          transform: translateX(0);
          transition: transform 300ms ease-out;
        `}
`

const BrandRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 8px 24px;
`

const List = styled.ul`
  list-style-type: none;
`

const Item = styled.li<{ selected: boolean }>`
  cursor: pointer;
  line-height: 32px;
  height: 32px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${props => (props.selected ? '#505051' : 'transparent')};

  &:hover {
    background-color: ${props => (props.selected ? '#505051' : '#3e3e40')};
  }
`

const Section = styled.div`
  font-size: 24px;
  padding: 16px 16px 8px 24px;
`
