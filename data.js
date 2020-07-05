import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const MOVIE_DATA = []

const CATEGORY_DATA = [
  {
    id: '1',
    name: 'drama',
  },
  {
    id: '2',
    name: 'action',
  },
  {
    id: '3',
    name: 'comedy',
  },
  {
    id: '4',
    name: 'documentary',
  },
  {
    id: '5',
    name: 'adventure',
  },
  {
    id: '6',
    name: 'noir',
  },
]

export const getMovies = () => {
  return axios
    .get(`${BASE_URL}/api/v1/movies`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const createMovie = movie => {
  movie.id = Math.random().toString(36).substr(2, 5)
  return axios
    .post(`${BASE_URL}/api/v1/movies`, movie)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
      // reject('Uh-oh A-aron')
    }, 50)
  })
}

export const getMovieById = id => {
  return axios
    .get(`${BASE_URL}/api/v1/movies/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const deleteMovie = id => {
  return axios
    .delete(`${BASE_URL}/api/v1/movies/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const updateMovie = movie => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data)
    .catch(err => console.log(err))
}
