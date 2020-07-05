import React, { useEffect, useState } from 'react'
import CreateMovieForm from '../../../components/CreateMovieForm'
import { getMovieById } from '../../../data'

const EditMovie = props => {
  const { movie } = props

  const handleCreateMovie = movie => {
    createMovie(movie)
      .then(movies => {
        // console.log(JSON.stringify(movies))
        modal.closeModal()
        router.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Edit Movie</h1>
      <CreateMovieForm initialData={movie} />
    </div>
  )
}

EditMovie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)
  return { movie }
}

export default EditMovie
