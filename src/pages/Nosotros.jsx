import React, { Fragment } from 'react'
import ChooseUs from '../components/choose-us/ChooseUs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Testimonials from '../components/testimonials/Testimonials';

const Nosotros = () => {
    return (
        <Fragment>
            <Header />
            <hr/><hr/>
            <ChooseUs />
            <Testimonials />
            <Footer />
        </Fragment>
    )
}

export default Nosotros