import { useState, useEffect } from 'react'

import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Head from 'next/head'
import MovieList from '../components/movieList'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'

import { getMovies, getCategories } from '../data'

const Home = props => {
  const { movies, images, categories } = props
  const [filter, setFilter] = useState('')

  const changeCategory = category => {
    setFilter(category)
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu
              appName={'Movie DB'}
              activeCategory={filter}
              categories={categories}
              changeCategory={changeCategory}
            />
          </div>
          <div className="col-lg-9">
            <Carousel images={images} />
            <div className="row">
              <MovieList movies={movies || []} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .homePageContainer {
          padding-top: 80px;
        }
      `}</style>
    </>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies()
  const categories = await getCategories()
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.image,
    name: movie.name,
  }))

  return {
    movies,
    images,
    categories,
  }
}

export default Home
