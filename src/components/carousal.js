import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const SlideShow = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/SE2_image-2023-03-29-14-39-pm.jpg"
          alt="First slide"
          
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/SE1_image-2023-03-29-14-31-pm.jpg"
          alt="Second slide"
          
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/SE27_image-2023-03-29-14-44-pm.jpg"
          alt="Third slide"
          
        />
        
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
export default SlideShow