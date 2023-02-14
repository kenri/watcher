import MainContent from 'components/MainContent'
import Sidebar from 'components/Sidebar'
import { AppProvider } from 'hooks/useAppContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import styled from 'styled-components'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Container>
          <Sidebar />

          <MainContent />
        </Container>
      </AppProvider>
    </QueryClientProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`
