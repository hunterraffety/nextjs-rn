import React from 'react'

const Carousel = props => {
  const { images } = props

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {images.map((image, idx) => {
          return (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              key={idx}
            ></li>
          )
        })}
      </ol>
      <div className="carousel-inner" role="listbox">
        {images.map((image, idx) => {
          return (
            <div
              className={`otter carousel-item ${idx === 0 ? 'active' : ''}`}
              key={idx}
            >
              <img
                className="d-block img-fluid"
                src={image.url}
                alt={image.name}
              />
            </div>
          )
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <style jsx>{`
        .otter {
          max-height: 400px;
        }
      `}</style>
    </div>
  )
}

export default Carousel
