import { fetchMovies } from 'api'
import useAppContext from 'hooks/useAppContext'
import { useEffect, useState } from 'react'
import { Movie } from 'types'

export default function useMovies(): Movie[] {
  const { genreId } = useAppContext()
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetchMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.error(error))
  }, [])

  if (genreId) {
    return movies.filter(movie => movie.genre_ids.find(id => id === genreId))
  }

  return movies
}
