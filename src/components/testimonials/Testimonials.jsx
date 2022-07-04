import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './testimonial.css'

import testimonialImg from '../../assets/images/review1.png'
import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

  return (
    <section>
        <Container>
            <Row>
                <Col lg='8' sm='12' md='12' className='m-auto'>
                    <div className="slider__wrapper d-flex align-items-center gap-5">
                        <div className="slider__content w-50">
                        <h2 className='mb-4'>Esto dicen nuestros clientes</h2>
                    <Slider {...settings}>
                        <div>
                            <div className="single__testimonial">
                                <p className="review__content">
                                    "El tamaño y el sabor de la pizza es increíble, sin duda alguna recomiendo muchísimo el lugar.""
                                </p>
                                <h6>Enrique Cancino</h6>
                                <p>Empresario</p>
                            </div>
                        </div>

                        <div>
                            <div className="single__testimonial">
                                <p className="review__content">
                                    El tamaño y el sabor de la pizza es increíble, sin duda alguna recomiendo muchísimo el lugar.
                                </p>
                                <h6>Enrique Cancino</h6>
                                <p>Empresario</p>
                            </div>
                        </div>
                    </Slider>
                        </div>
                        <div className="slider__img w-50">
                            <img src={testimonialImg} alt="" className='w-100'/>
                        </div>
                    </div>
                    
                </Col>
                
            </Row>
        </Container>
    </section>
  )
}

export default Testimonials