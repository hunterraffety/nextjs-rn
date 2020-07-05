import Link from 'next/link'

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
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a>
                  <img
                    className="image card-img-top"
                    src={movie.image}
                    alt=""
                  />
                </a>
              </Link>
              <div className="card-body">
                <h4 className="card-title">
                  <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                    <a>{movie.name}</a>
                  </Link>
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
      <style jsx>{`
        .image {
          max-height: 225px;
        }
      `}</style>
    </>
  )
}

export default MovieList
