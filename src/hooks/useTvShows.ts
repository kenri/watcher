import { fetchTvShows } from 'api'
import useAppContext from 'hooks/useAppContext'
import { useEffect, useState } from 'react'
import { TvShow } from 'types'

export default function useTvShows(): TvShow[] {
  const { genreId } = useAppContext()
  const [tvShows, setTvShows] = useState<TvShow[]>([])

  useEffect(() => {
    fetchTvShows()
      .then(data => setTvShows(data.results))
      .catch(error => console.error(error))
  }, [])

  if (genreId) {
    return tvShows.filter(tvShow => tvShow.genre_ids.find(id => id === genreId))
  }

  return tvShows
}
