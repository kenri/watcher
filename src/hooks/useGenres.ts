import { fetchGenres } from 'api'
import useAppContext from 'hooks/useAppContext'
import { useEffect, useState } from 'react'

type Genre = {
  id: number
  name: string
}

export default function useGenres() {
  const { mediaType } = useAppContext()
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    fetchGenres(mediaType)
      .then(data => {
        setGenres(data.genres)
      })
      .catch(error => console.error(error))
  }, [mediaType])

  return genres
}
