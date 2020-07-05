import { useRouter } from 'next/router'
import { getMovieById } from '../../data'

const Movie = props => {
  console.log(props)
  const router = useRouter()
  const { id } = router.query
  const { movie } = props
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.genre.toUpperCase()}</p>
        <img src={movie.image} />
        <hr className="my-4" />
        <p>{movie.description}</p>
        <a href="#" className="" role="button">
          Learn More
        </a>
      </div>
    </div>
  )
}

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)
  return { movie }
}

export default Movie
