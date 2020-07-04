import React, { Component } from 'react'

const MovieList = props => {
  const shorten = text =>
    text && text.length > 200 ? `${text.substr(0, 200)}...` : text
  const { movies } = props
  return (
    <>
      {movies.map((movie, idx) => {
        return (
          <div className="col-lg-4 col-md-6 mb-4" key={idx}>
            <div className="card h-100">
              <a href="#">
                <img className="card-img-top" src={movie.image} alt="" />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{movie.name}</a>
                </h4>
                <h5>Rating: {movie.rating}</h5>
                <p className="card-text">{shorten(movie.description)}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {movie.releaseYear} - {movie.genre}
                </small>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MovieList
