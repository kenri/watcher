import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useAppContext from 'hooks/useAppContext'
import styled from 'styled-components'

export default function MenuButton() {
  const { toggleMenu } = useAppContext()

  return (
    <Container onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </Container>
  )
}

const Container = styled.div<{ onClick: any }>`
  background-color: transparent;
  padding: 4px 8px;
  cursor: pointer;
  color: white;
  border-radius: 8px;

  &:hover {
    background-color: #3e3e40;
  }
`
