import React, { Fragment } from 'react'
import Descarga from '../components/download-section/Descarga';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';


const Reserva = () => {
    return (
        <Fragment>
            <Header />
            <hr/><hr/>
            <Descarga />
            <Footer />
        </Fragment>
    )
}

export default Reserva