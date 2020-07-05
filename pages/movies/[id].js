import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../data'

const Movie = props => {
  console.log(props)
  const router = useRouter()
  const { id } = router.query
  const { movie } = props

  const handleDeleteMovie = id => {
    deleteMovie(id)
      .then(() => {
        router.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.genre}</p>
        <img src={movie.image} />
        <hr className="my-4" />
        <p>{movie.description}</p>
        <p>{movie.longDesc}</p>
        <button role="button" onClick={() => handleDeleteMovie(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)
  return { movie }
}

export default Movie
