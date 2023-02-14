import styled from 'styled-components'

export default function Divider() {
  return <Container role='divider' />
}

const Container = styled.div`
  height: 1px;
  width: 100%;
  background-color: #424244;
  margin-top: 8px;
  margin-bottom: 8px;
`
