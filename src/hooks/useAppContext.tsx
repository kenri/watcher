import { createContext, ReactNode, useContext, useState } from 'react'

export const AppContext = createContext<{
  mediaType: 'movies' | 'tv shows'
  setMediaType: React.Dispatch<React.SetStateAction<'movies' | 'tv shows'>>
  genreId: number | undefined
  setGenreId: React.Dispatch<React.SetStateAction<number | undefined>>
  isMenuOpen: boolean
  toggleMenu: () => void
}>({
  mediaType: 'movies',
  setMediaType: () => {},
  genreId: undefined,
  setGenreId: () => {},
  isMenuOpen: true,
  toggleMenu: () => {},
})

export const AppConsumer = AppContext.Consumer

type Props = {
  children?: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const [mediaType, setMediaType] = useState<'movies' | 'tv shows'>('movies')
  const [genreId, setGenreId] = useState<number | undefined>()
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <AppContext.Provider
      value={{
        mediaType,
        setMediaType,
        genreId,
        setGenreId,
        isMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default function useAppContext() {
  const appContext = useContext(AppContext)

  return appContext
}
