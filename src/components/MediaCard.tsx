import styled from 'styled-components'

type Props = {
  imageUrl: string
  title: string
  details: string
  overview: string
}

export default function MediaCard({
  imageUrl,
  title,
  details,
  overview,
}: Props) {
  return (
    <Container>
      <Image src={imageUrl} alt={title} />

      <Content>
        <Title>{title}</Title>

        <Details>{details}</Details>

        <Summary>SUMMARY</Summary>
        <Descrtiption>{overview}</Descrtiption>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 8px;
  box-shadow: 5px 5px 115px -14px black;
  background-color: #1e1b26;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  mask-image: -webkit-linear-gradient(0deg, #000000 100%, #ffffff 100%);
`

const Content = styled.div`
  padding: 0px 12px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
`

const Details = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #818181;
  font-weight: 600;
  margin-bottom: 12px;
`

const Summary = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #e7e7e7;
  margin-bottom: 8px;
`

const Descrtiption = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9b9b9b;
  text-align: justify;
  line-height: 1.3;
  margin-bottom: 12px;
`
