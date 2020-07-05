import React, { useEffect, useState } from 'react'
import CreateMovieForm from '../../../components/CreateMovieForm'
import { getMovieById, updateMovie } from '../../../data'
import Router from 'next/router'

const EditMovie = props => {
  const { movie } = props

  const handleUpdateMovie = movie => {
    updateMovie(movie)
      .then(updatedMovie => {
        Router.push('/movies/[id]', `/movies/${movie.id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Edit Movie</h1>
      <CreateMovieForm
        initialData={movie}
        handleFormSubmit={handleUpdateMovie}
        submitButton="Update"
      />
    </div>
  )
}

EditMovie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)
  return { movie }
}

export default EditMovie
