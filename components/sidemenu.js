import { useState } from 'react'
import { useRouter } from 'next/router'

// components
import CreateMovieForm from './CreateMovieForm'
import Link from 'next/link'
import Modal from './Modal'

// functions
import { createMovie } from '../data'

const SideMenu = props => {
  const { appName, categories, changeCategory } = props
  const router = useRouter()
  let modal = null

  const handleCreateMovie = movie => {
    createMovie(movie)
      .then(movies => {
        modal.closeModal()
        router.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="sideMenuContainer">
      <Modal ref={el => (modal = el)} hasSubmit={false}>
        <CreateMovieForm handleSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {categories.map((category, idx) => {
          return (
            <a
              href="#"
              className={`list-group-item ${
                props.activeCategory === category.name ? 'active' : ''
              }`}
              key={category.id}
              onClick={() => changeCategory(category.name)}
            >
              {category.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SideMenu
