import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../data'
import Link from 'next/link'

const Movie = props => {
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
        <p className="lead">{movie.description}</p>
        <img src={movie.image} />
        <hr className="my-4" />
        <p>{movie.description}</p>
        <p>{movie.longDesc}</p>
        <button role="button" onClick={() => handleDeleteMovie(id)}>
          Delete
        </button>
        <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
          <button role="button">Edit</button>
        </Link>
      </div>
    </div>
  )
}

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)
  return { movie }
}

export default Movie
