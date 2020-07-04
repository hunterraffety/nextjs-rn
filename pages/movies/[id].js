import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Movie with id: {id}</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae
          harum iste quo expedita! Quaerat consequuntur fugiat vitae provident
          corrupti laudantium dolore tempore illum quae, voluptatum reiciendis,
          itaque tenetur sint quo fugit odio. Odio, ipsam voluptas? Doloribus,
          repellendus labore. Porro, asperiores culpa accusamus quae neque
          exercitationem? Nemo temporibus itaque voluptate?
        </p>
        <hr className="my-4" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          totam veritatis est expedita porro consequatur.
        </p>
        <a href="#" className="btn btn-lg" role="button">
          Learn More
        </a>
      </div>
    </div>
  )
}

export default Movie
