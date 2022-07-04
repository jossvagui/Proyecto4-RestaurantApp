import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './footer.css'

const footerLinks = [
    {
        display: 'Inicio',
        url: '#'
    },
    {
        display: 'Nosotros',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Reservar',
        url: '#'
    }
]

const footerQuickLinks = [
    {
        display: 'Términos y Condiciones',
        url: '#'
    },
    {
        display: 'Politicas de Privacidad',
        url: '#'
    },
    {
        display: 'Politicas de Reembolsos',
        url: '#'
    },
    {
        display: 'Métodos de Pago',
        url: '#'
    }
]

const Footer = () => {
    return (
        <footer className='footer'>

            <div className="footer__top">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className="d-flex align-items-center gap-1 mb-4">
                                    <span><i class="ri-restaurant-2-line"></i></span>{" "} El Italiano
                                </h2>
                                <p>Disfruta de los mejores platillos italianos directo a tu paladar</p>
                            </div>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className='footer__link-title'>
                                Enlaces Rápidos
                            </h5>
                            <ListGroup>
                                {
                                    footerQuickLinks.map((item, index) =>
                                        <ListGroupItem key={index} className='link__item'>
                                            <a href={item.url}>{item.display}</a>
                                        </ListGroupItem>
                                    )
                                }
                                <ListGroupItem className='link__item'>
                                    <a href=""></a>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                        <Col lg='2' md='4' sm='6'>
                            <h5 className='footer__link-title'>Navegación</h5>
                            <ListGroup>
                                {
                                    footerLinks.map((item, index) =>
                                        <ListGroupItem key={index} className='link__item'>
                                            <a href={item.url}>{item.display}</a>
                                        </ListGroupItem>
                                    )
                                }
                                <ListGroupItem className='link__item'>
                                    <a href=""></a>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className='footer__link-title'>Contacto</h5>
                            <ListGroup>
                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i class="ri-map-pin-line"></i>Chiapas, Mexico{" "}
                                </ListGroupItem>

                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i class="ri-mail-line"></i>elitaliano@gmail.com{" "}
                                </ListGroupItem>

                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i class="ri-phone-line"></i>9615248731{" "}
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <p>Copyright 2022. Creado por Josué Valadez</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer