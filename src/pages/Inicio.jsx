import React, { Fragment } from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeroSlider from '../components/hero-slider/HeroSlider';

import PopularMenu from '../components/popular-menu/PopularMenu';



const Inicio = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSlider />
      <PopularMenu />
      <Footer />
    </Fragment>
  )
}

export default Inicio