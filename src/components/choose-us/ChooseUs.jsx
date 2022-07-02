import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './choose-us.css'
import pastaImg from '../../assets/images/pasta.png'

const ChooseUs = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={pastaImg} alt="" className='w-100' />
                </Col>
                <Col lg='6'>
                    <div className="choose__content">
                        <h4>¿Quiénes somos?</h4>
                        <h2>Mira lo que te ofrecemos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at eum esse quasi recusandae quam!</p>
                    </div>
                    <div className="features mt-4">
                        <div className="feature1 d-flex align-items-center gap-5">
                            <div className="single__feature">
                            <span><i class="ri-truck-line"></i></span>
                            <h6>Envíos Gratis</h6>
                            <p>Llevamos la comida directamente a tu casa sin costo adicional</p>
                            </div>

                            <div className="single__feature">
                            <span className='feature__icon-two'>
                                <i class="ri-money-dollar-circle-line"></i>
                            </span>
                            <h6>Garantía de reembolso</h6>
                            <p>Si no estás satisfecho con nuestra comida, te regresamos tu dinero</p>
                            </div>
                        </div>

                        <div className="feature1 mt-3 d-flex align-items-center gap-5">
                            <div className="single__feature">
                            <span className='feature__icon-3'>
                            <i class="ri-secure-payment-line"></i>
                            </span>
                            <h6>Pagos con Tarjeta</h6>
                            <p>Aceptamos pagos con todas las tarjetas bancarias</p>
                            </div>

                            <div className="single__feature">
                            <span className='feature__icon-4'>
                            <i class="ri-time-line"></i>
                            </span>
                            <h6>Horario Extendido</h6>
                            <p>Puedes consumir en el establecimiento hasta altas horas de la noche</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs