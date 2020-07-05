import React, { useEffect, useState } from 'react'
import CreateMovieForm from '../../../components/CreateMovieForm'
import { getMovieById } from '../../../data'

const EditMovie = props => {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const { id } = props.query
    getMovieById(id).then(movie => {
      setMovie(movie)
    })
  }, [])

  console.log(movie)

  return (
    <div>
      <h1>Edit the Movie</h1>
      <CreateMovieForm initialData={movie} />
    </div>
  )
}

EditMovie.getInitialProps = ({ query }) => {
  return { query }
}

export default EditMovie
