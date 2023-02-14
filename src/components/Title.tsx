import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export default function Title({ children }: Props) {
  return <Container>{children}</Container>
}

const Container = styled.h2``
