// components
import CreateMovieForm from './CreateMovieForm'
import Link from 'next/link'
import Modal from './Modal'
import MovieCreateForm from './CreateMovieForm'

// functions
import { createMovie } from '../data'

const SideMenu = props => {
  const { appName, categories } = props
  let modal = null

  const handleCreateMovie = movie => {
    createMovie(movie)
      .then(movies => {
        console.log(JSON.stringify(movies))
        modal.closeModal()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="sideMenuContainer">
      <Modal ref={el => (modal = el)} hasSubmit={false}>
        <MovieCreateForm handleSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {categories.map((category, idx) => {
          return (
            <a href="#" className="list-group-item" key={idx}>
              {category.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SideMenu
