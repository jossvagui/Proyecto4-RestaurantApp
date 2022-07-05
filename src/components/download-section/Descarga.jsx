import React from 'react'
import './descarga.css'

import appImg from '../../assets/images/app.png'
import { Container, Row, Col } from 'reactstrap'
import Formulario from '../formulario/Formulario'




const Descarga = () => {
    return (
        <section>
            <Container className='app__container'>
                <Row className='app__title'><p>Realiza tu reservación...</p>
                </Row>                
                <Row>
                    <Col lg='6' md='6'>                                                
                        <div className="app_img">
                        <Formulario/>
                    </div>
                    
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="app__content">
                            <h5>También descarga nuestra app</h5>
                            <h2 className="mb-4">¡No te quedes con hambre! Ordena tu comida desde el celular</h2>
                            <p>Con nuestra aplicación móvil puedes elegir nuestra variedad de platillos desde la palma de tu mano.</p>

                            <div className="app__btns d-flex align-items-center gap-5 mt-4">
                                <button className="btn__apple d-flex align-items-center gap-3">
                                    <i class="ri-apple-line"></i><a href="#">Apple Store</a>
                                </button>

                                <button className="btn__google d-flex align-items-center gap-3">
                                    <i class="ri-google-play-line"></i><a href="#">Google Play</a>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Descarga