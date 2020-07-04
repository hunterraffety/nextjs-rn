import { useState, useEffect } from 'react'

import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Head from 'next/head'
import MovieList from '../components/movieList'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'

import { getMovies } from '../data'

const Home = props => {
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  // useEffect(() => {
  //   getMovies()
  //     .then(res => setMovies(res))
  //     .catch(err => setErrorMessage(err))
  // }, [])

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
            <SideMenu appName={'Movie DB'} />
          </div>
          <div className="col-lg-9">
            <Carousel />
            <div className="row">
              {errorMessage ? (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              ) : null}
              <MovieList movies={props.movies} />
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
  return {
    movies,
  }
}

export default Home
