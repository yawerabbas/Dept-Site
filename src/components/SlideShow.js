import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const SlideShow = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://iitj.ac.in/department/img/civil/Slide2.PNG"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/slide_image-2022-04-22-12-42-pm.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/open%20house_image-2022-04-11-13-07-pm.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default SlideShow