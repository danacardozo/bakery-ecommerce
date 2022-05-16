import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const MainCarousel = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="carousel img-fluid w-100"
      src="/images/15.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="carousel img-fluid w-100"
      src="/images/16.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel img-fluid w-100"
      src="/images/14.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
  )
}

export default MainCarousel