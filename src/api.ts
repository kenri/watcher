const API_URL = 'https://api.themoviedb.org/3'
const { REACT_APP_API_KEY } = process.env

export const fetchGenres = (mediaType: 'movies' | 'tv shows') => {
  return fetch(
    `${API_URL}/genre/${
      mediaType === 'movies' ? 'movie' : 'tv'
    }/list?api_key=${REACT_APP_API_KEY}`
  ).then(res => res.json())
}

export const fetchMovies = () => {
  return fetch(`${API_URL}/movie/popular?api_key=${REACT_APP_API_KEY}`).then(
    res => res.json()
  )
}

export const fetchTvShows = () => {
  return fetch(`${API_URL}/tv/popular?api_key=${REACT_APP_API_KEY}`).then(res =>
    res.json()
  )
}
